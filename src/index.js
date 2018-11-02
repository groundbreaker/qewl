import React from "react";
import { introspectionQuery, parse } from "graphql";
import { graphql } from "react-apollo";
import { compose, branch, renderComponent, withProps } from "recompose";
import humanize from "underscore.string/humanize";
import pluralize from "pluralize";
import titleize from "underscore.string/titleize";
import _ from "underscore";
import gql from "graphql-tag";

export const withSchema = () => {
  return compose(
    graphql(
      parse(introspectionQuery, {
        noLocation: true
      }),
      {
        options: {
          fetchPolicy: "cache-and-network"
        },
        props: props => {
          const schema = props.data.__schema;
          const inputObjects = _.where(schema.types, {
            kind: "INPUT_OBJECT"
          });
          return {
            apiSchema: {
              enums: _.where(schema.types, {
                kind: "ENUM"
              }),
              filterTypes: _.filter(inputObjects, type =>
                filterRegex.test(type.name)
              ),
              inputTypes: _.filter(
                inputObjects,
                type => !filterRegex.test(type.name)
              ),
              mutations: _.findWhere(schema.types, { name: "Mutation" }).fields,
              queries: _.findWhere(schema.types, { name: "Query" }).fields
            }
          };
        }
      }
    )
  );
};

export const decorateCreate = (
  LoadingComponent,
  ErrorComponent,
  resourceName,
  fields,
  inputTypeName = null,
  mutationName = null,
  queryName = null
) => {
  const mutationVars = {
    inputTypeName: inputTypeName || `Create${resourceName}Input`,
    mutationName: mutationName || `create${resourceName}`,
    queryName: queryName || `list${pluralize(resourceName)}`
  };
  const mutation = gql`mutation($input: ${mutationVars.inputTypeName}!){
        ${mutationVars.mutationName}(input: $input) {
          ${fields}
        }
      }`;

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
    withProps(props => ({
      schema: transformMutationToJSONSchema(
        _.findWhere(props.apiSchema.inputTypes, {
          name: mutationVars.inputTypeName
        }),
        props.apiSchema
      )
    }))
  );
};

export const decorateDetail = (
  LoadingComponent,
  ErrorComponent,
  resourceName,
  fields,
  params = {},
  queryName = null
) => {
  const queryVars = {
    queryName: queryName || `get${resourceName}`
  };
  return compose(
    graphql(gqlFetchDetail(queryVars.queryName, fields), {
      options: props => ({
        variables: { ...{ id: props.match.params.id }, ...params },
        fetchPolicy: "cache-and-network"
      }),
      props: props => ({
        data: props.data[queryVars.queryName]
      })
    }),
    branch(({ loading }) => loading, renderComponent(LoadingComponent)),
    branch(({ error }) => error, renderComponent(ErrorComponent))
  );
};

export const decorateEdit = (
  LoadingComponent,
  ErrorComponent,
  resourceName,
  fields,
  detailQueryName = null,
  inputTypeName = null,
  mutationName = null,
  queryName = null
) => {
  const mutationVars = {
    detailQueryName: detailQueryName || `get${resourceName}`,
    inputTypeName: inputTypeName || `Update${resourceName}Input`,
    mutationName: mutationName || `update${resourceName}`,
    listQueryName: queryName || `list${pluralize(resourceName)}`
  };
  const mutation = gql`mutation($input: ${mutationVars.inputTypeName}!){
        ${mutationVars.mutationName}(input: $input) {
          ${fields}
        }
      }`;

  return compose(
    graphql(gqlFetchDetail(mutationVars.detailQueryName, fields), {
      options: props => ({
        variables: { id: props.match.params.id },
        fetchPolicy: "cache-and-network"
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
          props.mutate({
            mutation: mutation,
            variables: { input: data }
          });
        }
      })
    }),
    branch(
      ({ formData, loading }) => loading || !formData,
      renderComponent(<LoadingComponent />)
    ),
    branch(({ error }) => error, renderComponent(<ErrorComponent />)),
    withProps(props => ({
      schema: transformMutationToJSONSchema(
        _.findWhere(props.apiSchema.inputTypes, {
          name: mutationVars.inputTypeName
        }),
        props.apiSchema
      )
    }))
  );
};

export const decorateList = (
  LoadingComponent,
  ErrorComponent,
  resourceName,
  fields,
  queryName = null
) => {
  const queryVars = {
    queryName: queryName || `list${pluralize(resourceName)}`
  };
  return compose(
    graphql(gqlFetchList(queryVars.queryName, fields), {
      options: {
        fetchPolicy: "cache-and-network"
      },
      props: props => ({
        data:
          (props.data[queryVars.queryName] &&
            props.data[queryVars.queryName].items) ||
          []
      })
    }),
    branch(({ loading }) => loading, renderComponent(LoadingComponent)),
    branch(({ error }) => error, renderComponent(ErrorComponent))
  );
};

const gqlFetchDetail = (queryName, fields) => {
  return gql`query($id: ID!) {
          ${queryName}(
            id: $id
          ) {
            ${fields}
          }
        }`;
};

const gqlFetchList = (queryName, fields) => {
  return gql`query($limit: Int, $nextToken: String) {
          ${queryName} (
            limit: $limit,
            nextToken: $nextToken
          ) {
            items {
              ${fields}
            }
          }
        }`;
};

const filterRegex = new RegExp(["Filter"].join("|"));

const processProperties = (apiSchema, fields) => {
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

const processRequired = fields => {
  let fieldsCopy = fields.slice();
  fieldsCopy = fields.map(field => {
    if (field.type.kind === "NON_NULL") {
      return field.name;
    }
    return null;
  });
  return _.filter(fieldsCopy, field => field !== null);
};

const transformMutationToJSONSchema = (mutation, apiSchema) => {
  const fields = mutation.inputFields;
  return {
    type: "object",
    required: processRequired(fields),
    properties: processProperties(apiSchema, fields)
  };
};
