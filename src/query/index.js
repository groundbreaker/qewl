import { graphql } from "react-apollo";
import { compose, branch, renderComponent } from "recompose";
import pluralize from "pluralize";
import _ from "underscore";
import { gqlFetchDetail, gqlFetchList } from "../common";

const decorateDetail = (
  LoadingComponent,
  ErrorComponent,
  resourceName,
  fields,
  params = {},
  queryName = null
) => {
  const query = queryName || `get${resourceName}`;

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
    branch(({ loading }) => loading, renderComponent(LoadingComponent)),
    branch(({ error }) => error, renderComponent(ErrorComponent))
  );
};

const decorateList = (
  LoadingComponent,
  ErrorComponent,
  resourceName,
  fields,
  queryName = null
) => {
  const query = queryName || `list${pluralize(resourceName)}`;

  return compose(
    graphql(gqlFetchList(query, fields), {
      options: {
        fetchPolicy: "cache-and-network"
      },
      props: props => ({
        data: (props.data[query] && props.data[query].items) || []
      })
    }),
    branch(({ loading }) => loading, renderComponent(LoadingComponent)),
    branch(({ error }) => error, renderComponent(ErrorComponent))
  );
};

export { decorateDetail, decorateList };
