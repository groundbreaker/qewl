import React from "react";
import { introspectionQuery, parse } from "graphql";
import {
  compose,
  lifecycle,
  branch,
  renderComponent,
  withHandlers
} from "recompose";
import capitalize from "underscore.string/capitalize";
import humanize from "underscore.string/humanize";
import pluralize from "pluralize";
import titleize from "underscore.string/titleize";
import _ from "underscore";
import gql from "graphql-tag";

export default class Qewl {
  constructor(client, resources) {
    this.client = client;
    this.resources = resources;
  }

  async detail(queryName, requestedFields = "id", params = null) {
    try {
      const query = gql`query($id: ID!) {
          ${queryName}(
            id: $id
          ) {
            ${requestedFields}
          }
        }`;

      let request = { query: query, fetchPolicy: "no-cache" };

      if (params) {
        request = { ...request, variables: { ...params } };
      }

      const response = await this.client
        .query(request)
        .then(response => response.data[queryName]);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async list(queryName, requestedFields = "id", params = null) {
    try {
      const query = gql`query($limit: Int, $nextToken: String) {
          ${queryName}(
            limit: $limit,
            nextToken: $nextToken
          ) {
            items {
              ${requestedFields}
            }
          }
        }`;

      let request = { query: query, fetchPolicy: "no-cache" };

      if (params) {
        request = { ...request, variables: { ...params } };
      }

      const response = await this.client
        .query(request)
        .then(response => response.data[queryName].items);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async mutate(queryName, inputName, payload, requestedFields = "id") {
    try {
      const mutation = gql`mutation($input: ${inputName}){
        ${queryName}(input: $input) {
          ${requestedFields}
        }
      }`;

      const response = await this.client
        .mutate({
          mutation: mutation,
          variables: { input: payload }
        })
        .then(response => response.data[queryName]);

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async schema() {
    try {
      let api = {
        enums: {},
        mutations: {},
        queries: {},
        inputTypes: {},
        filterTypes: {}
      };

      const query = parse(introspectionQuery, {
        noLocation: true
      });

      const schema = await this.client
        .query({
          query: query,
          fetchPolicy: "no-cache"
        })
        .then(response => {
          return response.data.__schema;
        });

      if (schema) {
        const inputObjects = _.where(schema.types, {
          kind: "INPUT_OBJECT"
        });

        api = {
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
        };
      }

      return api;
    } catch (err) {
      console.log(err);
    }
  }
}

export const decorateCreate = (
  LoadingComponent,
  resource = parseResource(window.location.pathname)
) => {
  return compose(
    lifecycle({
      state: {
        schema: {},
        mutation: null
      },
      async componentDidMount() {
        try {
          const {
            apiSchema,
            apiSchema: { inputTypes }
          } = this.props;
          const mutation = `create${capitalize(resource)}`;
          const inputType = `Create${capitalize(resource)}Input!`;
          const schema = transformMutationToJSONSchema(
            _.findWhere(inputTypes, {
              name: inputType
            }),
            apiSchema
          );
          this.setState({
            inputType,
            mutation,
            schema
          });
        } catch (err) {
          console.log(err);
        }
      }
    }),
    withHandlers({
      onSubmit: props => data => {
        const { api, inputType, mutation } = props;
        api.mutate(mutation, inputType, data.formData);
      }
    }),
    branch(({ loading }) => loading, renderComponent(<LoadingComponent />))
  );
};

export const decorateDetail = (
  LoadingComponent,
  resource = parseResource(window.location.pathname)
) => {
  return compose(
    lifecycle({
      state: {
        data: {}
      },
      async componentDidMount() {
        try {
          const {
            api,
            match: { params },
            resources
          } = this.props;
          const data = await api.detail(
            `get${capitalize(resource)}`,
            resources[resource].detail.fields,
            { id: params.id }
          );
          return this.setState({ data });
        } catch (err) {
          console.log(err);
        }
      }
    }),
    branch(({ loading }) => loading, renderComponent(<LoadingComponent />))
  );
};

export const decorateList = (
  LoadingComponent,
  resource = parseResource(window.location.pathname)
) => {
  return compose(
    lifecycle({
      state: { data: [] },
      async componentDidMount() {
        try {
          const { api, resources } = this.props;
          const data = await api.list(
            `list${capitalize(pluralize(resource))}`,
            resources[resource].list.fields
          );
          this.setState({ data });
        } catch (err) {
          console.log(err);
        }
      }
    }),
    branch(({ loading }) => loading, renderComponent(<LoadingComponent />))
  );
};

export const decorateUpdate = (
  LoadingComponent,
  resource = parseResource(window.location.pathname)
) => {
  return compose(
    lifecycle({
      state: {
        schema: {},
        mutation: null
      },
      async componentDidMount() {
        try {
          const {
            api,
            apiSchema,
            apiSchema: { inputTypes },
            match: { params },
            resources
          } = this.props;
          const formData = await api.detail(
            `get${capitalize(resource)}`,
            resources[resource].detail.fields,
            { id: params.id }
          );
          const mutation = `update${capitalize(resource)}`;
          const inputType = `Update${capitalize(resource)}Input!`;
          const schema = transformMutationToJSONSchema(
            _.findWhere(inputTypes, {
              name: inputType
            }),
            apiSchema
          );
          this.setState({
            inputType,
            mutation,
            schema,
            formData: _.omit(formData, "__typename")
          });
        } catch (err) {
          console.log(err);
        }
      }
    }),
    withHandlers({
      onSubmit: props => data => {
        const {
          api,
          inputType,
          mutation,
          match: { params }
        } = props;
        api.mutate(mutation, inputType, {
          ...{ id: params.id },
          ...data.formData
        });
      }
    }),
    branch(({ loading }) => loading, renderComponent(<LoadingComponent />))
  );
};

const filterRegex = new RegExp(["Filter"].join("|"));

const parseResource = path => {
  return pluralize.singular(
    _.filter(path.split("/"), segment => segment !== "")[0]
  );
};

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
  let fields = mutation.inputFields;
  return {
    type: "object",
    required: processRequired(fields),
    properties: processProperties(apiSchema, fields)
  };
};
