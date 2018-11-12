import React from "react";
import pluralize from "pluralize";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, branch, renderComponent, withProps } from "recompose";
import _ from "underscore";
import titleize from "underscore.string/titleize";
import humanize from "underscore.string/humanize";
import { gqlFetchDetail, gqlFetchList } from "../common";

const decorateCreate = (
  LoadingComponent,
  ErrorComponent,
  resourceName,
  fields,
  inputTypeName = null,
  mutationName = null,
  queryName = null
) => {
  const mutationVars = processMutationVars(
    inputTypeName,
    mutationName,
    queryName,
    resourceName
  );
  const mutation = gqlMutate(mutationVars, fields);

  return compose(
    graphql(mutation, {
      options: {
        refetchQueries: [
          {
            query: gqlFetchList(mutationVars.queryName, fields)
          }
        ]
      },
      props: props => ({
        onSubmit: data => {
          props.mutate({
            mutation: mutation,
            variables: { input: data }
          });
        }
      })
    }),
    branch(({ loading }) => loading, renderComponent(<LoadingComponent />)),
    branch(({ error }) => error, renderComponent(<ErrorComponent />)),
    withProps(props => processSchemas(props, mutationVars))
  );
};

const decorateEdit = (
  LoadingComponent,
  ErrorComponent,
  resourceName,
  fields,
  params = {},
  detailQueryName = null,
  inputTypeName = null,
  mutationName = null,
  queryName = null
) => {
  const mutationVars = processMutationVars(
    inputTypeName,
    mutationName,
    queryName,
    resourceName,
    true,
    detailQueryName
  );
  const mutation = gqlMutate(mutationVars, fields);

  return compose(
    graphql(gqlFetchDetail(mutationVars.detailQueryName, fields), {
      options: props => ({
        variables: { id: (params && params.id) || props.match.params.id },
        fetchPolicy: "cache-and-network",
        refetchQueries: [
          {
            query: gqlFetchList(mutationVars.queryName, fields)
          }
        ]
      }),
      props: props => ({
        formData: _.omit(
          props.data[mutationVars.detailQueryName],
          "__typename"
        ),
        data: props.data[mutationVars.detailQueryName]
      })
    }),
    graphql(mutation, {
      props: props => ({
        onSubmit: data => {
          props.mutate({ mutation: mutation, variables: { input: data } });
        }
      })
    }),
    branch(
      ({ formData, loading }) => loading || !formData,
      renderComponent(<LoadingComponent />)
    ),
    branch(({ error }) => error, renderComponent(<ErrorComponent />)),
    withProps(props => processSchemas(props, mutationVars))
  );
};

export const gqlMutate = (mutationVars, fields) => {
  return gql`mutation($input: ${mutationVars.inputTypeName}!){
        ${mutationVars.mutationName}(input: $input) {
          ${fields}
        }
      }`;
};

export const processMutationVars = (
  inputTypeName,
  mutationName,
  queryName,
  resourceName,
  update = false,
  detailQueryName = null
) => {
  return {
    detailQueryName: detailQueryName || `get${resourceName}`,
    inputTypeName:
      inputTypeName ||
      (update ? `Update${resourceName}Input` : `Create${resourceName}Input`),
    mutationName:
      mutationName ||
      (update ? `update${resourceName}` : `create${resourceName}`),
    queryName: queryName || `list${pluralize(resourceName)}`,
    updateMutationName: mutationName || `update${resourceName}`
  };
};

export const processProperties = (apiSchema, fields) => {
  let properties = {};

  fields.forEach(field => {
    if (field.name === "id") {
      return;
    }

    if (!field.type.ofType) {
      properties[field.name] = {
        type: field.type.name.toLowerCase(),
        title: titleize(humanize(field.name))
      };
    }

    if (field.type.ofType && field.type.ofType.kind === "SCALAR") {
      properties[field.name] = {
        type: field.type.ofType.name.toLowerCase(),
        title: titleize(humanize(field.name))
      };
    }

    if (
      (field.type.ofType && field.type.ofType.kind === "ENUM") ||
      field.type.kind === "ENUM"
    ) {
      const enumerator = _.findWhere(apiSchema.enums, {
        name: (field.type.ofType && field.type.ofType.name) || field.type.name
      });
      const values = _.pluck(enumerator.enumValues, "name");
      properties[field.name] = {
        type: "string",
        title: titleize(humanize(field.name)),
        enum: values,
        enumNames: values.map(value => titleize(value))
      };
    }
  });

  return properties;
};

export const processRequired = fields => {
  let fieldsCopy = fields.slice();
  fieldsCopy = fields.map(field => {
    if (field.type.kind === "NON_NULL") {
      return field.name;
    }
    return null;
  });
  return _.filter(fieldsCopy, field => field !== null);
};

export const processSchemas = (props, mutationVars) => {
  const fields = _.findWhere(props.apiSchema.inputTypes, {
    name: mutationVars.inputTypeName
  }).inputFields;
  return {
    schema: toJSONSchema(fields, props.apiSchema),
    uiSchema: toUISchema(fields)
  };
};

export const toJSONSchema = (fields, apiSchema) => {
  return {
    type: "object",
    required: processRequired(fields),
    properties: processProperties(apiSchema, fields)
  };
};

export const toUISchema = fields => {
  const uiSchema = {};
  fields.map(field => {
    uiSchema[field.name] = {
      "ui:options": {
        label: false
      },
      "ui:placeholder": titleize(humanize(field.name))
    };
  });
  return uiSchema;
};

export { decorateCreate, decorateEdit };