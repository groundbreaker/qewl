import gql from "graphql-tag";
import { createFactory } from "react";
import _ from "underscore";
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
export const mapperWrapper = QewlComponent => config => BaseComponent => {
  // we need to keep a reference to this in closure so we can feed it changing
  // props without changing the reference to the function.
  let factory;
  let lastConfig;

  const WrappedComponent = props => {
    const qewlConfig = typeof config === "function" ? config(props) : config;

    // This will setup qewl from props for the initial mounting (because factory
    // will be undefined), but after that, it will reuse that same qewl
    // component and pass down the props accordingly.
    //
    // If we didn't do that, and changed how qewl is configured, it would
    // require creating a new factory, which would cause qewl to unmount/remount
    // (and re-render for the entire tree of children).
    factory =
      _.isEqual(lastConfig, qewlConfig) && factory
        ? factory
        : createFactory(QewlComponent(qewlConfig)(BaseComponent));

    lastConfig = qewlConfig;

    return factory(props);
  };

  return WrappedComponent;
};

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
            limit: $limit,
            nextToken: $nextToken
          ) {
            items {
              ${fields}
            }
          }
        }`;
};
