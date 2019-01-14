import gql from "graphql-tag";

export const gqlFetchDetail = (queryName, fields, queryWithoutId) => {
  if (queryWithoutId) {
    return gql`query {
      ${queryName} {
        ${fields}
      }
    }`;
  }
  return gql`query($id: ID) {
          ${queryName}(
            id: $id
          ) {
            ${fields}
          }
        }`;
};

export const gqlFetchList = (queryName, fields, filter = null) => {
  if (filter) {
    return gql`query($limit: Int, $nextToken: String, $filter: ${filter}) {
          ${queryName} (
            filter: $filter,
            limit: $limit,
            nextToken: $nextToken
          ) {
            items {
              ${fields}
            }
          }
        }`;
  }

  return gql`query($limit: Int, $nextToken: String) {
          ${queryName} (
            filter: $filter,
            limit: $limit,
            nextToken: $nextToken
          ) {
            items {
              ${fields}
            }
          }
        }`;
};
