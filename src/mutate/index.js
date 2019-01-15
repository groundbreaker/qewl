import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  compose,
  branch,
  renderComponent,
  withProps,
  setDisplayName
} from "recompose";
import _ from "underscore";
import pluralize from "pluralize";
import { gqlFetchDetail, gqlFetchList } from "../common";
import withFormHandlers from "../withFormHandlers";
import { processFormData, processSchemas } from "../utils/json-schema";

const decorateCreate = args => {
  const mutationVars = processMutationVars(args);
  const mutation = gqlMutate(mutationVars, args.fields);

  let refetch = true;
  if (args.refetch === false) refetch = false;

  return compose(
    setDisplayName(`QewlCreate(${args.resource})`),
    graphql(mutation, {
      options: {
        ...(() =>
          refetch && {
            refetchQueries: [
              {
                query: gqlFetchList(mutationVars.queryName, args.fields)
              }
            ]
          })()
      },
      props: props => ({
        onSubmit: data =>
          props.mutate({
            mutation: mutation,
            variables: { input: data }
          })
      })
    }),
    setDisplayName("Qewl(LoadingComponent)"),
    branch(
      ({ loading }) => loading,
      renderComponent(({ LoadingComponent }) =>
        args.Loading ? <Loading /> : <LoadingComponent />
      )
    ),
    setDisplayName("Qewl(SchemaProcessing)"),
    withProps(props => processSchemas(props.apiSchema, mutationVars))
  );
};

const decorateEdit = args => {
  const { fields, params } = args;
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
          formData: processFormData(props.data[mutationVars.detailQueryName]),
          data: props.data[mutationVars.detailQueryName],
          loading: props.data.loading,
          ...(() =>
            props.data.error ? { apolloInternalError: props.data.error } : {})()
        })
      }
    ),
    setDisplayName(`QewlEditMutate(${args.resource})`),
    graphql(mutation, {
      props: props => ({
        onSubmit: data =>
          props.mutate({ mutation: mutation, variables: { input: data } })
      })
    }),
    setDisplayName("Qewl(SchemaProcessing)"),
    withProps(props => {
      const { schema, uiSchema } = processSchemas(
        props.apiSchema,
        mutationVars
      );

      return {
        schema: schema,
        uiSchema: uiSchema
      };
    }),
    setDisplayName("Qewl(SchemaProcessing)"),
    withProps(props => processSchemas(props.apiSchema, mutationVars)),
    setDisplayName("Qewl(withFormHandlers)"),
    withFormHandlers(),
    setDisplayName("Qewl(LoadingComponent)"),
    branch(
      ({ formData, loading }) => loading || !formData,
      renderComponent(({ LoadingComponent }) =>
        args.Loading ? <Loading /> : <LoadingComponent />
      )
    )
  );
};

const decorateDelete = args => {
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

export { decorateCreate, decorateEdit, decorateDelete };
