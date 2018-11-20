import { graphql } from "react-apollo";
import { compose, branch, renderComponent } from "recompose";
import pluralize from "pluralize";
import _ from "underscore";
import { gqlFetchDetail, gqlFetchList } from "../common";

const decorateDetail = ({ Loading, resource, fields, params, queryName }) => {
  const query = queryName || `get${resource}`;

  return compose(
    graphql(gqlFetchDetail(query, fields), {
      options: props => ({
        variables: {
          ...{ id: (params && params.id) || props.match.params.id }
        },
        fetchPolicy: "cache-and-network"
      }),
      props: props => ({
        data: props.data[query]
      })
    }),
    branch(({ loading }) => loading, renderComponent(Loading))
  );
};

const decorateList = ({ Loading, resource, fields, params, queryName }) => {
  const query = queryName || `list${pluralize(resource)}`;

  return compose(
    graphql(gqlFetchList(query, fields), {
      options: {
        fetchPolicy: "cache-and-network",
        variables: params
      },
      props: props => ({
        data: (props.data[query] && props.data[query].items) || []
      })
    }),
    branch(({ loading }) => loading, renderComponent(Loading))
  );
};

export { decorateDetail, decorateList };
