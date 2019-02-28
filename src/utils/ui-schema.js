import _ from "underscore";
import titleize from "underscore.string/titleize";
import humanize from "underscore.string/humanize";

export const generateUISchema = ({ properties }) => {
  return _.mapObject(properties, (value, key) => generateField(value, key));
};

const generateField = (value, key) => {
  if (key === "id")
    return {
      "ui:widget": "hidden"
    };

  if (!value.properties)
    return {
      "ui:placeholder": titleize(humanize(key)),
      "ui:options": { label: false }
    };

  return _.mapObject(value.properties, (v, k) => generateField(v, k));
};
