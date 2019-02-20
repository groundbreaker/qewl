import _ from "underscore";
import titleize from "underscore.string/titleize";
import humanize from "underscore.string/humanize";
import omit from "omit-deep";

import { mb } from "./vendor/mb";

const scalars = {
  awsemail: "string",
  awsdate: "string",
  awsdatetime: "string",
  awsjson: "string",
  awsipaddress: "string",
  awsurl: "string",
  awsphone: "string",
  string: "string"
};

const generateField = (value, key) => {
  if (!value.properties) {
    if (value.items) {
      return [];
    }

    return "";
  }

  return _.mapObject(value.properties, (v, k) => generateField(v, k));
};

export const removeNullKeys = formData => {
  let formDataCopy = JSON.parse(JSON.stringify(formData));

  Object.keys(formDataCopy).forEach(key => {
    if (formDataCopy[key] && typeof formDataCopy[key] === "object") {
      formDataCopy[key] = removeNullKeys(formDataCopy[key]);
      if (_.isEmpty(formDataCopy[key])) delete formDataCopy[key];
    } else if (formDataCopy[key] === undefined || formDataCopy[key] === null)
      delete formDataCopy[key];
    else formDataCopy[key] = formDataCopy[key];
  });

  return formDataCopy;
};

export const processFormData = ({ schema, data }) => {
  const processedFormSchema = _.mapObject(schema.properties, (v, k) =>
    generateField(v, k)
  );
  let payload = processedFormSchema;

  if (data) {
    payload = {
      ...processedFormSchema,
      ...removeNullKeys(data)
    };
  }

  return omit(payload, ["__typename"]);
};

const fieldTypes = ({ apiSchema, inputField, field }) => {
  const { enums, inputTypes } = apiSchema;

  const scalarOptions = {
    ENUM: {
      type: "string",
      enums: _.pluck(
        mb(["enumValues"])(_.findWhere(enums, { name: field.name })),
        "name"
      )
    },
    INPUT_OBJECT:
      mb(["name"])(_.findWhere(inputTypes, { name: field.name })) &&
      processInput({
        apiSchema,
        input: mb(["name"])(_.findWhere(inputTypes, { name: field.name }))
      }),
    LIST: {
      type: "array",
      items:
        mb(["ofType"])(field) &&
        fieldTypes({ apiSchema, field: mb(["ofType"])(field), inputField })
    },
    SCALAR: {
      type: scalars[field.name && field.name.toLowerCase()]
    }
  };

  return {
    ...scalarOptions[field.kind],
    ...{ title: processTitle(inputField.name) }
  };
};

const processInput = ({ apiSchema, input }) => {
  const { inputTypes } = apiSchema;
  const schema = { properties: {}, required: [], type: "object" };
  const inputType = _.findWhere(inputTypes, { name: input });

  inputType.inputFields.map(inputField => {
    let field = mb(["type"])(inputField);

    if (inputField.type.kind === "NON_NULL") {
      schema.required.push(inputField.name);
      field = mb(["type", "ofType"])(inputField);
    }

    schema.properties[inputField.name] = fieldTypes({
      apiSchema,
      inputField,
      field
    });
  });

  return schema;
};

export const processSchemas = (apiSchema, mutationVars) => {
  return {
    schema: processInput({ apiSchema, input: mutationVars.inputTypeName }),
    uiSchema: {}
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
