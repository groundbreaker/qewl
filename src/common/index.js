import gql from "graphql-tag";
import { createFactory } from "react";

/**
 * Converts:
 * ```js
  HigherOrderComponent(
    config: Object
  ): HigherOrderComponent
 ```
 * Into:
 * ```javascript
  HigherOrderComponent(
  config: (ownerProps) => Object | Object
  ): HigherOrderComponent
    ```
 * @param {HigherOrderComponent} QewlComponent
 */
export const mapperWrapper = QewlComponent => input => BaseComponent => props =>
  createFactory(
    QewlComponent({ ...(typeof input === "function" ? input(props) : input) })(
      BaseComponent
    )
  )(props);

export const gqlFetchDetail = (queryName, fields, queryWithoutId) => {
  if (queryWithoutId) {
    return gql`query {
      ${queryName} {
        ${fields}
      }
    }`;
  }
  return gql`query($id: ID!) {
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
