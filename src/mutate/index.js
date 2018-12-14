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
  awsemail: "string",
  awsdate: "string",
  awsdatetime: "string",
  awsjson: "string",
  awsipaddress: "string",
  awsurl: "string",
  awsphone: "string"
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
        onSubmit: data =>
          props.mutate({
            mutation: mutation,
            variables: { input: data }
          })
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
        data: props.data[mutationVars.detailQueryName],
        loading: props.data.loading,
        ...(() =>
          props.data.error ? { apolloInternalError: props.data.error } : {})()
      })
    }),
    graphql(mutation, {
      props: props => ({
        onSubmit: data =>
          props.mutate({ mutation: mutation, variables: { input: data } })
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
    if (_.isArray(v)) {
      return v.map(processFormData);
    }

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
      const {
        type: { kind, name, ofType }
      } = field;

      if (kind === "LIST") {
        properties[field.name] = {
          type: "array",
          title: processTitle(field.name),
          items: toJSONSchema(pluckFields(apiSchema, ofType.name), apiSchema)
        };
      }

      if (kind === "SCALAR") {
        properties[field.name] = processScalar(field.name, name.toLowerCase());
      }

      if (kind === "ENUM") {
        properties[field.name] = processEnum(
          field.name,
          pluckEnumValues(apiSchema, name)
        );
      }

      if (kind === "INPUT_OBJECT") {
        properties[field.name] = toJSONSchema(
          pluckFields(apiSchema, name),
          apiSchema
        );
      }
    }

    if (field.type.ofType) {
      const {
        type: {
          ofType: { kind, name, ofType }
        }
      } = field;

      if (kind === "LIST") {
        properties[field.name] = {
          type: "array",
          title: processTitle(field.name),
          items: toJSONSchema(pluckFields(apiSchema, ofType.name), apiSchema)
        };
      }

      if (kind === "INPUT_OBJECT") {
        properties[field.name] = toJSONSchema(
          pluckFields(apiSchema, name),
          apiSchema
        );
      }

      if (kind === "SCALAR") {
        properties[field.name] = processScalar(field.name, name.toLowerCase());
      }

      if (kind === "ENUM") {
        properties[field.name] = processEnum(
          field.name,
          pluckEnumValues(apiSchema, name)
        );
      }
    }
  });

  return properties;
};

export const pluckEnumValues = (apiSchema, name) =>
  _.pluck(
    _.findWhere(apiSchema.enums, {
      name: name
    }).enumValues,
    "name"
  );

export const pluckFields = (apiSchema, inputName) =>
  _.findWhere(apiSchema.inputTypes, {
    name: inputName
  }).inputFields;

export const processEnum = (fieldName, values) => ({
  type: "string",
  title: processTitle(fieldName),
  enum: values,
  enumNames: values.map(value => titleize(humanize(value)))
});

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

export const processScalar = (fieldName, typeName) => ({
  type: awsScalars[typeName] || typeName,
  title: processTitle(fieldName)
});

export const processSchemas = (apiSchema, mutationVars) => {
  const fields = pluckFields(apiSchema, mutationVars.inputTypeName);
  return {
    schema: toJSONSchema(fields, apiSchema),
    uiSchema: toUISchema(fields, apiSchema)
  };
};

export const processTitle = title => titleize(humanize(title));

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
        memo[cur.name] = { "ui:placeholder": processTitle(cur.name) };
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

    uiSchema[field.name] = { "ui:placeholder": processTitle(field.name) };
  });

  return uiSchema;
};

export { decorateCreate, decorateEdit };
