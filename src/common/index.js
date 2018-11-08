import gql from "graphql-tag";

export const gqlFetchDetail = (queryName, fields) => {
  return gql`query($id: ID!) {
          ${queryName}(
            id: $id
          ) {
            ${fields}
          }
        }`;
};

export const gqlFetchList = (queryName, fields) => {
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
