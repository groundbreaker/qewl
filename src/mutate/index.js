import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  compose,
  setDisplayName,
  branch,
  renderNothing,
  withProps
} from "recompose";
import _ from "underscore";
import pluralize from "pluralize";
import { gqlFetchList } from "../common";

import { generateUISchema } from "../utils/ui-schema";

import withForm from "@groundbreaker/qewl-forms";

import { gqlFetchDetail, mapperWrapper, panicIfNoApiSchema } from "../common";

const decorateCreateBase = ({ rjsf, ...args }) => {
  const mutationVars = processMutationVars(args, "create");
  const mutation = gqlMutate(mutationVars, args.fields);

  return compose(
    panicIfNoApiSchema,
    setDisplayName(`Qewl(WithForm)`),
    withForm({
      input: mutationVars.inputTypeName,
      rjsf,
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
      props: ({
        ownProps: { formData, schema, validateFormData },
        mutate
      }) => ({
        uiSchema: generateUISchema(schema),
        [args.submitKey || `onSubmit`]: optionalData => {
          const errors = validateFormData(optionalData);
          if (errors.dataValid) {
            return mutate({
              mutation: mutation,
              variables: {
                input: optionalData ? optionalData : formData
              }
            });
          }
          throw errors;
        }
      })
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
    resource,
    rjsf,
    submitKey,
    excludeFromInput = []
  } = args;
  const mutationVars = processMutationVars(args, "update");
  const mutation = gqlMutate(mutationVars, args.fields);
  const detailQuery = gqlFetchDetail(
    mutationVars.detailQueryName,
    fetchFields || fields,
    params && params.queryWithoutId
  );

  return compose(
    panicIfNoApiSchema,
    setDisplayName(`QewlEditFetch(${resource})`),
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
      props: props => {
        return {
          [dataKey || `data`]: props.data[mutationVars.detailQueryName],
          loading: props.data.loading,
          apolloInternalError: props.data.error
        };
      }
    }),
    branch(props => !props[dataKey || `data`], renderNothing),
    setDisplayName(`Qewl(WithForm)`),
    withForm({
      input: mutationVars.inputTypeName,
      dataKey: dataKey || "data",
      mergeKey,
      rjsf,
      defaultValues
    }),
    setDisplayName(`QewlEditMutate(${resource})`),
    graphql(mutation, {
      options: {
        ...(args.refetch && {
          refetchQueries: [
            {
              query: detailQuery,
              variables: {
                id: {
                  ...(props.match && props.match.params),
                  ...props,
                  ...params
                }.id
              }
            }
          ]
        })
      },
      props: ({
        ownProps: { formData, validateFormData, schema },
        mutate
      }) => ({
        uiSchema: generateUISchema(schema),
        [submitKey || `onSubmit`]: optionalData => {
          const errors = validateFormData(optionalData);

          if (errors.dataValid) {
            return mutate({
              mutation: mutation,
              variables: {
                input: _.omit(
                  optionalData ? optionalData : formData,
                  excludeFromInput
                )
              }
            });
          }

          throw errors;
        }
      })
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
  return gql`mutation($input: ${mutationVars.inputTypeName}!){
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
