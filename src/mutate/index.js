import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, setDisplayName, branch, renderNothing } from "recompose";
import _ from "underscore";
import pluralize from "pluralize";

import { generateUISchema } from "../utils/ui-schema";

import withForm from "@groundbreaker/qewl-forms";

import { gqlFetchDetail, mapperWrapper } from "../common";

const decorateCreateBase = args => {
  const mutationVars = processMutationVars(args, "create");
  const mutation = gqlMutate(mutationVars, args.fields);

  return compose(
    setDisplayName(`Qewl(WithForm)`),
    withForm({ input: mutationVars.inputTypeName }),
    setDisplayName(`QewlCreate(${args.resource})`),
    graphql(mutation, {
      props: ({ ownProps: { formData, schema }, mutate }) => ({
        uiSchema: generateUISchema(schema),
        onSubmit: () =>
          mutate({
            mutation: mutation,
            variables: { input: formData }
          })
      })
    })
  );
};

const decorateEditBase = args => {
  const { dataKey, fields, fetchFields, excludeFromForm = [] } = args;
  const mutationVars = processMutationVars(args, "update");
  const mutation = gqlMutate(mutationVars, args.fields);

  return compose(
    setDisplayName(`QewlEditFetch(${args.resource})`),
    graphql(
      gqlFetchDetail(
        mutationVars.detailQueryName,
        fetchFields || fields,
        params && params.queryWithoutId
      ),
      {
        options: props => {
          return {
            variables: {
              id: { ...props.match.params, ...props, ...args.params }.id
            },
            fetchPolicy: "cache-and-network"
          };
        },
        props: props => ({
          // formData: _.omit(
          //   processFormData(props.data[mutationVars.detailQueryName]),
          //   excludeFromForm
          // ),
          [dataKey || `data`]: props.data[mutationVars.detailQueryName],
          loading: props.data.loading,
          apolloInternalError: props.data.error
        })
      }
    ),
    branch(props => !props[dataKey || `data`], renderNothing),
    setDisplayName(`Qewl(WithForm)`),
    withForm({ input: mutationVars.inputTypeName, dataKey: dataKey || "data" }),
    setDisplayName(`QewlEditMutate(${args.resource})`),
    graphql(mutation, {
      props: ({ ownProps: { formData, schema }, mutate }) => ({
        uiSchema: generateUISchema(schema),
        onSubmit: () =>
          mutate({ mutation: mutation, variables: { input: formData } })
      })
    })
  );
};

const decorateDeleteBase = args => {
  const mutation = gqlMutate(processMutationVars(args, "destroy"), args.fields);

  return compose(
    setDisplayName(`QewlDeleteMutate(${args.resource})`),
    graphql(mutation, {
      props: props => ({
        [`delete${args.resource}`]: params =>
          props.mutate({
            mutation: mutation,
            variables: {
              input: {
                id: { ...props.match.params, ...props, ...args.params }.id
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
