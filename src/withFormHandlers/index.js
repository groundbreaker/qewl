import { compose, withStateHandlers } from "recompose";
import _ from "underscore";

const withFormHandlers = () => {
  return compose(
    withStateHandlers(
      props => ({
        form: processFormFields(props.schema.properties),
        errors: []
      }),
      {
        setForm: state => (value, key, nestedKey = null) => {
          if (nestedKey) {
            return {
              form: {
                ...state.form,
                ...{
                  ...state.form.nestedKey,
                  ...{
                    [nestedKey]: {
                      [key]: value
                    }
                  }
                }
              }
            };
          }
          return { form: { ...state.form, ...{ [key]: value } } };
        }
      }
    )
  );
};

export default withFormHandlers;

const processFormFields = properties => {
  return _.mapObject(properties, (k, v) => {
    return null;
  });
};
