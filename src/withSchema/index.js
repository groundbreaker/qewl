import _ from "underscore";
import { introspectionQuery, parse } from "graphql";
import { graphql } from "react-apollo";
import { compose, withProps } from "recompose";

const withSchema = fullIntrospectionQuery => {
  if (fullIntrospectionQuery) {
    return compose(
      withProps({
        apiSchema: generateApiSchema(fullIntrospectionQuery.__schema)
      })
    );
  }

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
          const schema = props.data && props.data.__schema;

          if (schema) {
            return {
              apiSchema: generateApiSchema(props.data.__schema)
            };
          }
        }
      }
    )
  );
};

export const generateApiSchema = schema => {
  return {
    enums: pluckEnums(schema),
    filterTypes: pluckFilterTypes(schema),
    inputTypes: pluckInputTypes(schema),
    mutations: pluckMutations(schema),
    queries: pluckQueries(schema)
  };
};

export const pluckEnums = schema =>
  _.where(schema.types, {
    kind: "ENUM"
  });

export const pluckFilterTypes = schema =>
  _.filter(pluckInputObjects(schema), type => filterRegex.test(type.name));

export const pluckInputObjects = schema =>
  _.where(schema.types, {
    kind: "INPUT_OBJECT"
  });
export const pluckInputTypes = schema =>
  _.filter(pluckInputObjects(schema), type => !filterRegex.test(type.name));

export const pluckMutations = schema =>
  _.findWhere(schema.types, { name: "Mutation" }).fields;

export const pluckQueries = schema =>
  _.findWhere(schema.types, { name: "Query" }).fields;

const filterRegex = new RegExp(["Filter"].join("|"));

export default withSchema;
