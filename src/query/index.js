import { graphql } from "react-apollo";
import { compose, setDisplayName } from "recompose";
import pluralize from "pluralize";
import _ from "underscore";

import { gqlFetchDetail, gqlFetchList, mapperWrapper } from "../common";

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
      props: props => ({
        apolloInternalError: props.data.error,
        [dataKey || `data`]: props.data[query],
        loading: props.data.loading
      })
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

  return compose(
    setDisplayName(`QewlList(${resource})`),
    graphql(gqlFetchList(query, fields, `${resource}FilterInput`), {
      options: {
        fetchPolicy: fetchPolicy || "cache-and-network",
        pollInterval: pollInterval || 0,
        variables: params
      },
      props: props => {
        const {
          data: { fetchMore }
        } = props;
        return {
          apolloInternalError: props.data.error,
          filterQuery: params => {
            fetchMore({
              variables: params,
              updateQuery: (previousResult, { fetchMoreResult }) => ({
                [query]: fetchMoreResult[query]
              })
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

const decorateList = mapperWrapper(decorateListBase);
const decorateDetail = mapperWrapper(decorateDetailBase);
export { decorateDetail, decorateList };
