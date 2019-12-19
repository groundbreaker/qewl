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
          }) =>
            subscribeToMore({
              document,
              variables: params,
              updateQuery: (previousResult, { subscriptionData }) => {
                if (callback) {
                  return callback(previousResult, subscriptionData);
                }
              }
            })
        };
      }
    })
  );
};

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

        return {
          // These two props are used by the spooling functionality below.
          _data: data,
          stillFetching: true,
          // The props below are essentially a flattened `data` prop that one
          // would usually see come from react-apollo, with custom names.
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
          }) =>
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
            }),
          // Flatten the data.items into data.  Note that items is guaranteed to
          // be an array (but it might be empty)
          [dataKey || `data`]: items
        };
      }
    }),
    withPropsOnChange(
      /**
       * Spool out more results when
       *   1) we have a _new_ nextToken and
       *   2) there is no request currently in flight.
       *
       *  Right now, we use networkStatus===7 for this, because it means there
       *  was _no error_, whereas props.loading is true for network status 8 (no
       *  request in flight, but there was an error with the last network req)
       */
      (props, nextProps) => {
        const data = props._data[query];
        const nextData = nextProps._data[query];

        const thisToken = data ? data.nextToken : "";
        const nextToken = nextData ? nextData.nextToken : "";

        return nextToken !== thisToken && nextProps._data.networkStatus === 7;
      },
      /**
       * Do the result spooling.
       * Injects a prop, `stilFetching: bool`, which when true indicates that
       * some results have been returned from the list operation, but more are
       * coming.
       */
      function qewlSpoolResults({ _data }) {
        const queryResult = _data[query];
        const nextToken = queryResult ? queryResult.nextToken : "";

        /**
         * When we are done spooling, `nextToken` goes from "something" -> "",
         * which is a change, and so, `qewlSpoolResults` will still fire.
         * But we do not want to do another refetch in that case, so we only
         * call refetch when `nextToken` is truthy
         */
        if (nextToken) {
          _data.fetchMore({
            variables: { ...params, nextToken },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const next = fetchMoreResult[query];
              const previous = previousResult[query];

              // Spread the results from the fetchMore result into the prior
              // result and return (add it to the cache, the app will react to
              // the new data).
              const result = {
                [query]: {
                  ...next,
                  items: [...next.items, ...previous.items]
                }
              };

              return result;
            }
          });
          // Tell the UI that we are still handling nextTokens...
          return { stillFetching: true };
        }

        /**
         * This code is only reachable when nextToken === "", which signifies
         * we are done spooling, and we can inform the UI that we are not still
         * fetching.
         */
        return { stillFetching: false };
      }
    )
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
