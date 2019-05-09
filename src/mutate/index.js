import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, setDisplayName, branch, renderNothing } from "recompose";
import _ from "underscore";
import pluralize from "pluralize";
import { gqlFetchList } from "../common";

import withForm from "@groundbreaker/qewl-forms";

import { gqlFetchDetail, mapperWrapper, panicIfNoApiSchema } from "../common";

const onSubmitFactory = ({ onSubmitName, excludeFromInput }) => ({
  ownProps: { formData, schema, validateFormData },
  mutate
}) => ({
  [onSubmitName]: optionalData => {
    const input = _.omit(
      optionalData ? optionalData : formData,
      excludeFromInput
    );

    const errors = validateFormData(input);
    if (errors.dataValid) {
      return mutate({
        variables: { input }
      });
    }
    throw errors;
  }
});

const decorateCreateBase = args => {
  const mutationVars = processMutationVars(args, "create");
  const mutation = gqlMutate(mutationVars, args.fields);
  const onSubmitName = args.submitKey || `onSubmit`;
  const { excludeFromInput = [] } = args;

  return compose(
    panicIfNoApiSchema,
    setDisplayName(`Qewl(WithForm)`),
    withForm({
      input: mutationVars.inputTypeName,
      formName: args.formName,
      defaultValues: args.defaultValues
    }),
    setDisplayName(`QewlCreate(${args.resource})`),
    graphql(mutation, {
      options: {
        ...(args.refetch && {
          refetchQueries: [
            {
              query: gqlFetchList(
                mutationVars.queryName,
                args.fetchFields || args.fields
              )
            }
          ]
        })
      },
      props: onSubmitFactory({ onSubmitName, excludeFromInput })
    })
  );
};

const decorateEditBase = args => {
  const {
    defaultValues,
    mergeKey,
    dataKey,
    params,
    fields,
    fetchFields,
    prefetchData = true,
    resource,
    submitKey,
    excludeFromInput = []
  } = args;
  const mutationVars = processMutationVars(args, "update");
  const mutation = gqlMutate(mutationVars, args.fields);
  const onSubmitName = args.submitKey || `onSubmit`;

  const detailQuery = gqlFetchDetail(
    mutationVars.detailQueryName,
    fetchFields || fields,
    params && params.queryWithoutId
  );

  return compose(
    panicIfNoApiSchema,
    graphql(detailQuery, {
      options: props => {
        return {
          variables: {
            id: {
              ...(props.match && props.match.params),
              ...props,
              ...params
            }.id
          },
          fetchPolicy: "cache-and-network"
        };
      },
      skip: !prefetchData,
      props: props => {
        return {
          [dataKey || `data`]: props.data[mutationVars.detailQueryName],
          loading: props.data.loading,
          apolloInternalError: props.data.error
        };
      }
    }),
    branch(props => prefetchData && !props[dataKey || `data`], renderNothing),
    setDisplayName(`Qewl(WithForm)`),
    withForm({
      input: mutationVars.inputTypeName,
      dataKey: dataKey || "data",
      formName: args.formName,
      mergeKey,
      defaultValues
    }),
    setDisplayName(`QewlEditMutate(${resource})`),
    graphql(mutation, {
      options: props => ({
        ...(args.refetch && {
          refetchQueries: [
            {
              query: detailQuery,
              variables: {
                id:
                  {
                    ...(props.match && props.match.params),
                    ...props,
                    ...params
                  }.id || null
              }
            }
          ]
        })
      }),
      props: onSubmitFactory({ onSubmitName, excludeFromInput })
    })
  );
};

const decorateDeleteBase = args => {
  const { fetchFields, fields, params } = args;
  const mutationVars = processMutationVars(args, "destroy");
  const mutation = gqlMutate(mutationVars, fields);
  return compose(
    panicIfNoApiSchema,
    setDisplayName(`QewlDeleteMutate(${args.resource})`),
    graphql(mutation, {
      options: props => ({
        ...(args.refetch && {
          refetchQueries: [
            {
              query: gqlFetchDetail(
                mutationVars.detailQueryName,
                fetchFields || fields,
                params && params.queryWithoutId
              ),
              variables: {
                id: {
                  ...(props.match && props.match.params),
                  ...props,
                  ...params,
                  ...args
                }.id
              }
            }
          ]
        })
      }),
      props: props => ({
        [`delete${args.resource}`]: input =>
          props.mutate({
            mutation,
            variables: { input },
            ...(args.update && {
              update: store => {
                const defaultQuery = gqlFetchList(
                  mutationVars.queryName,
                  args.fetchFields || args.fields,
                  "String"
                );
                args.update({ store, defaultQuery, input });
              }
            })
          })
      })
    })
  );
};

export const gqlMutate = (mutationVars, fields) => {
  return gql`mutation ${mutationVars.mutationName}($input: ${
    mutationVars.inputTypeName
  }!){
        ${mutationVars.mutationName}(input: $input) {
          ${fields}
        }
      }`;
};

export const processInputTypeName = ({ resource }, type) => {
  const inputTypeNames = {
    create: `Create${resource}Input`,
    destroy: `Delete${resource}Input`,
    update: `Update${resource}Input`
  };

  return inputTypeNames[type];
};

export const processMutationName = ({ resource }, type) => {
  const mutationNames = {
    create: `create${resource}`,
    destroy: `delete${resource}`,
    update: `update${resource}`
  };

  return mutationNames[type];
};

export const processMutationVars = (args, type) => {
  const {
    inputTypeName,
    mutationName,
    queryName,
    resource,
    detailQueryName
  } = args;

  return {
    detailQueryName: detailQueryName || `get${resource}`,
    inputTypeName: inputTypeName || processInputTypeName(args, type),
    mutationName: mutationName || processMutationName(args, type),
    queryName: queryName || `list${pluralize(resource)}`
  };
};

const decorateCreate = mapperWrapper(decorateCreateBase);
const decorateEdit = mapperWrapper(decorateEditBase);
const decorateDelete = mapperWrapper(decorateDeleteBase);

export { decorateCreate, decorateEdit, decorateDelete };
