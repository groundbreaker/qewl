import React from "react";
import { graphql } from "react-apollo";
import { compose, branch, renderComponent } from "recompose";
import pluralize from "pluralize";
import _ from "underscore";
import { gqlFetchDetail, gqlFetchList, mapperWrapper } from "../common";

const decorateDetailBase = args => {
  const { Loading, resource, fields, params, queryName } = args;
  const queryWithoutId = params && params.queryWithoutId;
  const query = queryName || `get${resource}`;

  return compose(
    graphql(gqlFetchDetail(query, fields, queryWithoutId), {
      options: props => ({
        variables: {
          ...params,
          ...{ id: (params && params.id) || props.match.params.id }
        },
        fetchPolicy: "cache-and-network"
      }),
      props: props => ({
        data: props.data[query],
        loading: props.data.loading
      })
    }),
    branch(
      ({ loading }) => loading,
      renderComponent(({ LoadingComponent }) =>
        Loading ? <Loading /> : <LoadingComponent />
      )
    )
  );
};

const decorateListBase = args => {
  const { Loading, resource, fields, params, queryName } = args;
  const query = queryName || `list${pluralize(resource)}`;

  return compose(
    graphql(gqlFetchList(query, fields, `${resource}FilterInput`), {
      options: {
        fetchPolicy: "network-only",
        variables: params
      },
      props: props => {
        const {
          data: { fetchMore }
        } = props;
        return {
          filterQuery: params => {
            fetchMore({
              variables: params,
              updateQuery: (previousResult, { fetchMoreResult }) => ({
                [query]: fetchMoreResult[query]
              })
            });
          },
          data: (props.data[query] && props.data[query].items) || [],
          loading: props.data.loading
        };
      }
    }),
    branch(
      ({ loading }) => loading,
      renderComponent(({ LoadingComponent }) =>
        Loading ? <Loading /> : <LoadingComponent />
      )
    )
  );
};

const decorateList = mapperWrapper(decorateListBase);
const decorateDetail = mapperWrapper(decorateDetailBase);
export { decorateDetail, decorateList };
