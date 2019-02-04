import _ from "underscore";
import titleize from "underscore.string/titleize";
import humanize from "underscore.string/humanize";

const awsScalars = {
  awsemail: "string",
  awsdate: "string",
  awsdatetime: "string",
  awsjson: "string",
  awsipaddress: "string",
  awsurl: "string",
  awsphone: "string"
};

export const processFormData = data => {
  return _.mapObject(_.omit(data, "__typename"), v => {
    if (_.isArray(v)) {
      return v.map(processFormData);
    }

    if (_.isObject(v)) {
      return processFormData(v);
    }

    return v;
  });
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

      if (kind === "LIST" && ofType.kind !== "ENUM") {
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
      let {
        type: { kind, name, ofType }
      } = field;

      const validTypes = { LIST: 1, INPUT_OBJECT: 1, SCALAR: 1, ENUM: 1 };

      if (!(kind in validTypes)) {
        kind = ofType.kind;
        name = ofType.name;
        ofType = ofType.ofType;
      }

      if (kind === "LIST" && ofType.kind !== "ENUM") {
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

  if (fields) {
    return {
      schema: toJSONSchema(fields, apiSchema),
      uiSchema: toUISchema(fields, apiSchema)
    };
  }

  return {
    schema: null,
    uiSchema: null
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
