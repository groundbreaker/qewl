import React from "react";
import pluralize from "pluralize";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, branch, renderComponent, withProps } from "recompose";
import _ from "underscore";
import titleize from "underscore.string/titleize";
import humanize from "underscore.string/humanize";
import { gqlFetchDetail, gqlFetchList } from "../common";

const awsScalars = {
  awsurl: "string"
};

const decorateCreate = ({
  Loading,
  resource,
  fields,
  inputTypeName,
  mutationName,
  queryName
}) => {
  const mutationVars = processMutationVars(
    inputTypeName,
    mutationName,
    queryName,
    resource
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
    branch(
      ({ loading }) => loading,
      renderComponent(({ LoadingComponent }) =>
        Loading ? <Loading /> : <LoadingComponent />
      )
    ),
    withProps(props => processSchemas(props.apiSchema, mutationVars))
  );
};

const decorateEdit = ({
  Loading,
  resource,
  fields,
  params,
  detailQueryName,
  inputTypeName,
  mutationName,
  queryName
}) => {
  const mutationVars = processMutationVars(
    inputTypeName,
    mutationName,
    queryName,
    resource,
    true,
    detailQueryName
  );
  const mutation = gqlMutate(mutationVars, fields);

  return compose(
    graphql(gqlFetchDetail(mutationVars.detailQueryName, fields), {
      options: props => {
        return {
          variables: {
            id:
              (props && props.id) ||
              (params && params.id) ||
              props.match.params.id
          },
          fetchPolicy: "cache-and-network",
          refetchQueries: [
            {
              query: gqlFetchList(mutationVars.queryName, fields)
            }
          ]
        };
      },
      props: props => ({
        formData: processFormData(props.data[mutationVars.detailQueryName]),
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
    withProps(props => processSchemas(props.apiSchema, mutationVars)),
    branch(
      ({ formData, loading }) => loading || !formData,
      renderComponent(({ LoadingComponent }) =>
        Loading ? <Loading /> : <LoadingComponent />
      )
    )
  );
};

export const gqlMutate = (mutationVars, fields) => {
  return gql`mutation($input: ${mutationVars.inputTypeName}!){
        ${mutationVars.mutationName}(input: $input) {
          ${fields}
        }
      }`;
};

export const processFormData = data => {
  return _.mapObject(_.omit(data, "__typename"), v => {
    if (_.isObject(v)) {
      return _.omit(v, "__typename");
    }

    return v;
  });
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
      const typeName = field.type.name.toLowerCase();
      properties[field.name] = {
        type: awsScalars[typeName] || typeName,
        title: titleize(humanize(field.name))
      };
    }

    if (field.type.ofType) {
      if (field.type.ofType.kind === "INPUT_OBJECT") {
        const fields = _.findWhere(apiSchema.inputTypes, {
          name: field.type.ofType.name
        }).inputFields;
        properties[field.name] = toJSONSchema(fields, apiSchema);
      }

      if (field.type.ofType.kind === "SCALAR") {
        const typeName = field.type.ofType.name.toLowerCase();
        properties[field.name] = {
          type: awsScalars[typeName] || typeName,
          title: titleize(humanize(field.name))
        };
      }

      if (field.type.ofType.kind === "ENUM" || field.type.kind === "ENUM") {
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

export const processSchemas = (apiSchema, mutationVars) => {
  const fields = _.findWhere(apiSchema.inputTypes, {
    name: mutationVars.inputTypeName
  }).inputFields;
  return {
    schema: toJSONSchema(fields, apiSchema),
    uiSchema: toUISchema(fields, apiSchema)
  };
};

export const toJSONSchema = (fields, apiSchema) => {
  return {
    type: "object",
    required: processRequired(fields),
    properties: processProperties(apiSchema, fields)
  };
};

export const toUISchema = (fields, apiSchema) => {
  const uiSchema = {};
  fields.map(field => {
    if (field.type.ofType && field.type.ofType.kind === "INPUT_OBJECT") {
      let inputFields = _.findWhere(apiSchema.inputTypes, {
        name: field.type.ofType.name
      }).inputFields;
      const nestedUISchema = inputFields.reduce((memo, cur) => {
        memo[cur.name] = { "ui:placeholder": titleize(humanize(cur.name)) };
        return memo;
      }, {});

      return (uiSchema[field.name] = {
        ...{
          "ui:options": {
            label: false
          }
        },
        ...nestedUISchema
      });
    }

    uiSchema[field.name] = {
      "ui:placeholder": titleize(humanize(field.name))
    };
  });

  return uiSchema;
};

export { decorateCreate, decorateEdit };
