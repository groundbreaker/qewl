import React from "react";
import { graphql } from "react-apollo";
import { compose, branch, renderComponent, withProps } from "recompose";
import pluralize from "pluralize";
import _ from "underscore";
import { gqlFetchDetail, gqlFetchList } from "../common";

const decorateDetail = ({ Loading, resource, fields, params, queryName }) => {
  const query = queryName || `get${resource}`;

  return compose(
    graphql(gqlFetchDetail(query, fields, params.queryWithoutId), {
      options: props => ({
        variables: {
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

const decorateList = ({ Loading, resource, fields, params, queryName }) => {
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

export { decorateDetail, decorateList };
