import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { mapperWrapper } from "../common";

/**
 * Qewl's escape hatch.
 * @param {*} param0
 */
const decorateCustomBase = ({ queryDocument, options, overrides }) =>
  graphql(gql(queryDocument), {
    options,
    ...overrides
  });

const decorateCustom = mapperWrapper(decorateCustomBase);
export { decorateCustom };
