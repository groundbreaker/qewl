import { graphql } from "react-apollo";
import { compose, setDisplayName } from "recompose";
import pluralize from "pluralize";
import _ from "underscore";

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
          data: { fetchMore, subscribeToMore }
        } = props;
        return {
          apolloInternalError: props.data.error,
          [dataKey || `data`]: props.data[query],
          loading: props.data.loading,
          refetch: params => {
            fetchMore({
              variables: params,
              updateQuery: (previousResult, { fetchMoreResult }) => ({
                [query]: fetchMoreResult[query]
              })
            });
          },
          subscribe: ({ callback, document, params }) => {
            subscribeToMore({
              document,
              variables: params,
              updateQuery: (previousResult, { subscriptionData }) =>
                callback(previousResult, subscriptionData)
            });
          }
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
      props: props => {
        const {
          data: { fetchMore, subscribeToMore }
        } = props;
        return {
          apolloInternalError: props.data.error,
          refetch: params => {
            fetchMore({
              variables: params,
              updateQuery: (previousResult, { fetchMoreResult }) => ({
                [query]: fetchMoreResult[query]
              })
            });
          },
          subscribe: ({ callback, document, params }) => {
            subscribeToMore({
              document,
              variables: params,
              updateQuery: (previousResult, { subscriptionData }) =>
                callback(previousResult, subscriptionData)
            });
          },
          [dataKey || `data`]:
            (props.data[query] && props.data[query].items) || [],
          loading: props.data.loading
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
