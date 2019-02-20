import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, setDisplayName } from "recompose";
import _ from "underscore";
import pluralize from "pluralize";
import { gqlFetchDetail, gqlFetchList, mapperWrapper } from "../common";
import {
  processFormData,
  processSchemas,
  removeNullKeys
} from "../utils/json-schema";
import { schema as convertToJoi } from "enjoi";
import joi from "joi";

const decorateCreateBase = args => {
  const mutationVars = processMutationVars(args);
  const mutation = gqlMutate(mutationVars, args.fields);

  let refetch = true;
  if (args.refetch === false) refetch = false;

  return compose(
    setDisplayName(`QewlCreate(${args.resource})`),
    graphql(mutation, {
      options: {
        ...(() =>
          refetch && {
            refetchQueries: [
              {
                query: gqlFetchList(mutationVars.queryName, args.fields)
              }
            ]
          })()
      },
      props: props => {
        const { schema, uiSchema } = processSchemas(
          props.ownProps.apiSchema,
          mutationVars
        );
        return {
          onSubmit: createOnSubmitHandler(props, schema, mutation),
          schema,
          uiSchema
        };
      }
    })
  );
};

const decorateEditBase = args => {
  const { dataKey, fields, params } = args;
  const queryWithoutId = params && params.queryWithoutId;
  const mutationVars = processMutationVars({ ...args, ...{ update: true } });
  const mutation = gqlMutate(mutationVars, args.fields);

  return compose(
    setDisplayName(`QewlEditFetch(${args.resource})`),
    graphql(
      gqlFetchDetail(mutationVars.detailQueryName, fields, queryWithoutId),
      {
        options: props => {
          return {
            variables: {
              id:
                (props && props.id) ||
                (args.params && args.params.id) ||
                props.match.params.id
            },
            fetchPolicy: "cache-and-network",
            refetchQueries: [
              {
                query: gqlFetchList(mutationVars.queryName, args.fields)
              }
            ]
          };
        },
        props: props => ({
          [dataKey || `data`]: props.data[mutationVars.detailQueryName],
          loading: props.data.loading,
          apolloInternalError: props.data.error
        })
      }
    ),
    setDisplayName(`QewlEditMutate(${args.resource})`),
    graphql(mutation, {
      props: props => {
        const { schema, uiSchema } = processSchemas(
          props.ownProps.apiSchema,
          mutationVars
        );

        const formData = processFormData({
          schema,
          data: props.ownProps[dataKey || `data`]
        });

        return {
          formData,
          onSubmit: createOnSubmitHandler(props, schema, mutation),
          schema,
          uiSchema
        };
      }
    })
  );
};

const decorateDeleteBase = args => {
  const mutationVars = processMutationVars({ ...args, ...{ destroy: true } });
  const mutation = gqlMutate(mutationVars, args.fields);
  return compose(
    setDisplayName(`QewlDeleteMutate(${args.resource})`),
    graphql(mutation, {
      props: props => ({
        [`delete${args.resource}`]: params =>
          props.mutate({
            mutation: mutation,
            variables: {
              input: {
                id:
                  (props && props.id) ||
                  (params && params.id) ||
                  props.match.params.id
              }
            }
          })
      })
    })
  );
};

const createOnSubmitHandler = (props, schema, mutation) => (
  data,
  options = {}
) => {
  const processedData = removeEmpty(processFormData({ schema, data }));

  const boundMutate = validData =>
    props.mutate({ mutation: mutation, variables: { input: validData } });

  if (options.validateDefault || options.validateSchema) {
    return new Promise((resolve, reject) => {
      joi
        .validate(
          removeNullKeys(processedData),
          options.validateSchema || convertToJoi(schema),
          {
            abortEarly: false
          }
        )
        .then(async values => {
          try {
            const result = await boundMutate(values);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  return new Promise(async (resolve, reject) => {
    try {
      const result = await boundMutate(processedData);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const removeEmpty = obj => {
  const objCopy = JSON.parse(JSON.stringify(obj));

  Object.entries(objCopy).forEach(([key, val]) => {
    if (
      typeof val === "object" &&
      !_.isArray(val) &&
      !_.compact(Object.values(val)).length
    ) {
      delete objCopy[key];
      return;
    }

    (val && typeof val === "object" && removeEmpty(val)) ||
      (val === "" && (objCopy[key] = null));
  });

  return objCopy;
};

export const gqlMutate = (mutationVars, fields) => {
  return gql`mutation($input: ${mutationVars.inputTypeName}!){
        ${mutationVars.mutationName}(input: $input) {
          ${fields}
        }
      }`;
};

export const processInputTypeName = args => {
  const { destroy, resource, update } = args;
  let inputTypeName = `Create${resource}Input`;

  if (destroy) {
    inputTypeName = `Delete${resource}Input`;
  }

  if (update) {
    inputTypeName = `Update${resource}Input`;
  }

  return inputTypeName;
};

export const processMutationName = args => {
  const { destroy, resource, update } = args;
  let mutationName = `create${resource}`;

  if (destroy) {
    mutationName = `delete${resource}`;
  }

  if (update) {
    mutationName = `update${resource}`;
  }

  return mutationName;
};

export const processMutationVars = args => {
  const {
    inputTypeName,
    mutationName,
    queryName,
    resource,
    detailQueryName
  } = args;

  return {
    detailQueryName: detailQueryName || `get${resource}`,
    inputTypeName: inputTypeName || processInputTypeName(args),
    mutationName: mutationName || processMutationName(args),
    queryName: queryName || `list${pluralize(resource)}`
  };
};

const decorateCreate = mapperWrapper(decorateCreateBase);
const decorateEdit = mapperWrapper(decorateEditBase);
const decorateDelete = mapperWrapper(decorateDeleteBase);

export { decorateCreate, decorateEdit, decorateDelete };
