import { graphql } from "react-apollo";
import {
  compose,
  withPropsOnChange,
  mapProps,
  setDisplayName
} from "recompose";
import pluralize from "pluralize";

import {
  gqlFetchDetail,
  gqlFetchList,
  gqlFetchSearch,
  mapperWrapper
} from "../common";

const decorateDetailBase = ({
  dataKey,
  fetchPolicy,
  fields,
  params,
  pollInterval,
  queryName,
  resource
}) => {
  const query = queryName || `get${resource}`;

  return compose(
    setDisplayName(`QewlDetail(${resource})`),
    graphql(gqlFetchDetail(query, fields, params && params.queryWithoutId), {
      options: props => ({
        variables: {
          ...params,
          ...{ id: { ...props.match.params, ...params }.id }
        },
        fetchPolicy: fetchPolicy || "cache-and-network",
        pollInterval: pollInterval || 0
      }),
      props: props => {
        const {
          data: {
            error: apolloInternalError,
            fetchMore,
            loading,
            networkStatus,
            subscribeToMore
          }
        } = props;
        return {
          apolloInternalError,
          [dataKey || `data`]: props.data[query],
          [dataKey ? `${dataKey}Loading` : `loading`]: loading,
          networkStatus,
          [dataKey ? `${dataKey}Refetch` : `refetch`]: params => {
            fetchMore({
              variables: params,
              updateQuery: (_, { fetchMoreResult }) => ({
                [query]: fetchMoreResult[query]
              })
            });
          },
          [dataKey ? `${dataKey}Subscribe` : `subscribe`]: ({
            callback,
            document,
            params
          }) => {
            subscribeToMore({
              document,
              variables: params,
              updateQuery: (previousResult, { subscriptionData }) => {
                if (callback) {
                  return callback(previousResult, subscriptionData);
                }
              }
            });
          }
        };
      }
    })
  );
};

let pendingAutoFetch = false;
const decorateListBase = ({
  dataKey,
  fetchPolicy,
  fields,
  params,
  pollInterval,
  queryName,
  resource
}) => {
  const query = queryName || `list${pluralize(resource)}`;
  const filter =
    query.indexOf("filter") >= 0
      ? `[${resource}DataFilterInput]`
      : `${resource}FilterInput`;
  return compose(
    setDisplayName(`QewlList(${resource})`),
    graphql(gqlFetchList(query, fields, filter), {
      options: {
        fetchPolicy: fetchPolicy || "cache-and-network",
        pollInterval: pollInterval || 0,
        variables: params
      },
      props: ({ data, ownProps }) => {
        const fetchMore = data.fetchMore;
        const items = data[query] ? data[query].items : [];
        const nextToken = data[query] ? data[query].nextToken : null;

        if (
          !pendingAutoFetch &&
          !data.loading &&
          items.length < 50 &&
          nextToken
        ) {
          pendingAutoFetch = true;
          fetchMore({
            variables: { ...params, nextToken },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const next = fetchMoreResult[query];
              const previous = previousResult[query];

              console.log("Merging", {
                next: next.items,
                previous: previous.items
              });

              const result = {
                [query]: {
                  ...next,
                  items: [...next.items, ...previous.items]
                }
              };
              pendingAutoFetch = false;
              return result;
            }
          });
        }

        return {
          apolloInternalError: data.error,
          [dataKey ? `${dataKey}Loading` : "loading"]: data.loading,
          [dataKey ? `${dataKey}Refetch` : `refetch`]: params => {
            fetchMore({
              variables: params,
              updateQuery: (previousResult, { fetchMoreResult }) => ({
                [query]: fetchMoreResult[query]
              })
            });
          },
          [dataKey ? `${dataKey}Subscribe` : `subscribe`]: ({
            callback,
            document,
            subscriptionKey,
            params
          }) => {
            data.subscribeToMore({
              document,
              variables: params,
              updateQuery: (previousResult, { subscriptionData }) => {
                if (callback) {
                  return callback(previousResult, subscriptionData);
                }
                return {
                  [query]: {
                    items: [
                      ...previousResult[query].items,
                      ...[subscriptionData.data[subscriptionKey]]
                    ],
                    __typename: previousResult[query].__typename
                  }
                };
              }
            });
          },
          [dataKey || `data`]: items
        };
      }
    })
  );
};

const decorateSearchBase = ({ dataKey, fields, defaultSearch }) =>
  compose(
    setDisplayName(`QewlSearch`),
    graphql(gqlFetchSearch("search", fields), {
      options: {
        fetchPolicy: "no-cache",
        variables: { keywords: defaultSearch || "" },
        notifyOnNetworkStatusChange: true
      },
      props: props => {
        const {
          data: { refetch, error, loading, networkStatus, search = {} }
        } = props;
        return {
          apolloInternalError: error,
          submitSearch: params => refetch(params),
          [dataKey || `searchResults`]: search.items || [],
          loading,
          networkStatus
        };
      }
    })
  );

const decorateList = mapperWrapper(decorateListBase);
const decorateDetail = mapperWrapper(decorateDetailBase);
const decorateSearch = mapperWrapper(decorateSearchBase);
export { decorateDetail, decorateList, decorateSearch };
