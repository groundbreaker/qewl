import { graphql } from "react-apollo";
import { compose, setDisplayName } from "recompose";
import pluralize from "pluralize";
import _ from "underscore";
import { gqlFetchDetail, gqlFetchList, mapperWrapper } from "../common";

const decorateDetailBase = args => {
  const { dataKey, fields, Loading, params, queryName, resource } = args;
  const queryWithoutId = params && params.queryWithoutId;
  const query = queryName || `get${resource}`;

  return compose(
    setDisplayName(`QewlDetail(${resource})`),
    graphql(gqlFetchDetail(query, fields, queryWithoutId), {
      options: props => ({
        variables: {
          ...params,
          ...{ id: (params && params.id) || props.match.params.id }
        },
        fetchPolicy: "cache-and-network"
      }),
      props: props => ({
        ...(() => props.data.error && console.log("APOLLO ERROR", props))(),
        [dataKey || `data`]: props.data[query],
        loading: props.data.loading
      })
    })
  );
};

const decorateListBase = args => {
  const { dataKey, fields, Loading, params, queryName, resource } = args;
  const query = queryName || `list${pluralize(resource)}`;

  return compose(
    setDisplayName(`QewlList(${resource})`),
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
