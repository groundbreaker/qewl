import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, setDisplayName, branch, renderNothing } from "recompose";
import _ from "underscore";
import pluralize from "pluralize";

import withForm from "@groundbreaker/qewl-forms";

import { gqlFetchDetail, gqlFetchList, mapperWrapper } from "../common";

const decorateCreateBase = args => {
  const mutationVars = processMutationVars(args);
  const mutation = gqlMutate(mutationVars, args.fields);

  return compose(
    setDisplayName(`QewlCreate(${args.resource})`),
    withForm({ input: mutationVars.inputTypeName }),
    graphql(mutation, {
      options: {
        ...(() =>
          (args.refetch || true) && {
            refetchQueries: [
              {
                query: gqlFetchList(mutationVars.queryName, args.fields)
              }
            ]
          })()
      },
      props: ({ ownProps: { formData }, mutate }) => ({
        uiSchema: {},
        onSubmit: () =>
          mutate({
            mutation: mutation,
            variables: { input: formData }
          })
      })
    }),
    setDisplayName(`QewlForm`)
  );
};

const decorateEditBase = args => {
  const { dataKey, fields, params } = args;
  const queryWithoutId = params && params.queryWithoutId;
  const mutationVars = processMutationVars({ ...args, ...{ update: true } });
  const mutation = gqlMutate(mutationVars, args.fields);

  return compose(
    setDisplayName(`QewlEditFetch(${args.resource})`),
    graphql(
      gqlFetchDetail(mutationVars.detailQueryName, fields, queryWithoutId),
      {
        options: props => {
          return {
            variables: {
              id:
                (props && props.id) ||
                (args.params && args.params.id) ||
                props.match.params.id
            },
            fetchPolicy: "cache-and-network",
            refetchQueries: [
              {
                query: gqlFetchList(mutationVars.queryName, args.fields)
              }
            ]
          };
        },
        props: props => ({
          [dataKey || `data`]: props.data[mutationVars.detailQueryName],
          loading: props.data.loading,
          apolloInternalError: props.data.error
        })
      }
    ),
    branch(props => !props[dataKey || `data`], renderNothing),
    setDisplayName(`QewlForm`),
    withForm({ input: mutationVars.inputTypeName, dataKey: dataKey || "data" }),
    setDisplayName(`QewlEditMutate(${args.resource})`),
    graphql(mutation, {
      props: ({ ownProps: { formData }, mutate }) => ({
        uiSchema: {},
        onSubmit: () =>
          mutate({ mutation: mutation, variables: { input: formData } })
      })
    })
  );
};

const decorateDeleteBase = args => {
  const mutationVars = processMutationVars({ ...args, ...{ destroy: true } });
  const mutation = gqlMutate(mutationVars, args.fields);
  return compose(
    setDisplayName(`QewlDeleteMutate(${args.resource})`),
    graphql(mutation, {
      props: props => ({
        [`delete${args.resource}`]: params =>
          props.mutate({
            mutation: mutation,
            variables: {
              input: {
                id:
                  (props && props.id) ||
                  (params && params.id) ||
                  props.match.params.id
              }
            }
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

export const processInputTypeName = args => {
  const { destroy, resource, update } = args;
  let inputTypeName = `Create${resource}Input`;

  if (destroy) {
    inputTypeName = `Delete${resource}Input`;
  }

  if (update) {
    inputTypeName = `Update${resource}Input`;
  }

  return inputTypeName;
};

export const processMutationName = args => {
  const { destroy, resource, update } = args;
  let mutationName = `create${resource}`;

  if (destroy) {
    mutationName = `delete${resource}`;
  }

  if (update) {
    mutationName = `update${resource}`;
  }

  return mutationName;
};

export const processMutationVars = args => {
  const {
    inputTypeName,
    mutationName,
    queryName,
    resource,
    detailQueryName
  } = args;

  return {
    detailQueryName: detailQueryName || `get${resource}`,
    inputTypeName: inputTypeName || processInputTypeName(args),
    mutationName: mutationName || processMutationName(args),
    queryName: queryName || `list${pluralize(resource)}`
  };
};

const decorateCreate = mapperWrapper(decorateCreateBase);
const decorateEdit = mapperWrapper(decorateEditBase);
const decorateDelete = mapperWrapper(decorateDeleteBase);

export { decorateCreate, decorateEdit, decorateDelete };
