import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  compose,
  setDisplayName,
  branch,
  renderNothing,
  shouldUpdate
} from "recompose";
import _ from "underscore";
import pluralize from "pluralize";
import { gqlFetchList } from "../common";

import withForm from "@groundbreaker/qewl-forms";

import { gqlFetchDetail, mapperWrapper, panicIfNoApiSchema } from "../common";

const onSubmitFactory = ({
  onSubmitName,
  excludeFromInput = [],
  formDataKey
}) => ({ ownProps, mutate }) => ({
  [onSubmitName]: optionalData => {
    const formData = optionalData || ownProps[formDataKey];
    const input = _.omit(formData, excludeFromInput);
    const errors = ownProps.validateFormData(input);

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
  const onSubmitName =
    args.submitKey || args.formName ? `${args.formName}OnSubmit` : `onSubmit`;

  const { excludeFromInput, formName } = args;
  const formDataKey = formName ? `${formName}FormData` : `formData`;

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
      props: onSubmitFactory({
        onSubmitName,
        excludeFromInput,
        formDataKey,
        mutationVars
      })
    })
  );
};

const decorateEditBase = args => {
  const { excludeFromInput, formName, params, prefetchData = true } = args;

  const mutationVars = processMutationVars(args, "update");
  const mutation = gqlMutate(mutationVars, args.fields);
  const onSubmitName =
    args.submitKey || args.formName ? `${args.formName}OnSubmit` : `onSubmit`;

  /**
   *  TODO: Refactor this entire logic chain to minimize API / complexity
   */
  // If formName is set...
  // ...and if dataKey is not set, pass `withForm({ dataKey: null })`.
  const maybeNullDataKeyFallback = formName ? null : "data";
  const withFormDataKey = args.dataKey || maybeNullDataKeyFallback;
  // This avoids overwriting nested form fields when merging formData.

  // ...and use the correct key to access formData.
  const formDataKey = formName ? `${formName}FormData` : `formData`;

  // Regardless, save graphql data to under the prop `dataKey` or `"data"`.
  const propsDataKey = args.dataKey || "data";
  // ------

  const detailQuery = gqlFetchDetail(
    mutationVars.detailQueryName,
    args.fetchFields || args.fields,
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
          fetchPolicy: "cache-and-network",
          notifyOnNetworkStatusChange: true
        };
      },
      skip: !prefetchData,
      props: props => {
        const {
          data: { error: apolloInternalError, loading, networkStatus }
        } = props;

        return {
          [propsDataKey]: props.data[mutationVars.detailQueryName],
          loading,
          networkStatus,
          apolloInternalError
        };
      }
    }),
    shouldUpdate(({}, nextProps) => {
      return prefetchData ? !_.isEmpty(nextProps[propsDataKey]) : true;
    }),
    branch(props => prefetchData && !props[propsDataKey], renderNothing),
    setDisplayName(`Qewl(WithForm)`),
    withForm({
      input: mutationVars.inputTypeName,
      dataKey: withFormDataKey,
      formName,
      mergeKey: args.mergeKey,
      defaultValues: args.defaultValues
    }),
    setDisplayName(`QewlEditMutate(${args.resource})`),
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
      props: onSubmitFactory({ onSubmitName, excludeFromInput, formDataKey })
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
