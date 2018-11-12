# Qewl [![Build Status](https://travis-ci.com/groundbreaker/qewl.svg?branch=master)](https://travis-ci.com/groundbreaker/qewl)
A toolbelt designed to eliminate the boilerplate code that comes with consuming [GraphQL](https://graphql.org) API's via a [React](https://reactjs.org) and [Apollo](https://www.apollographql.com) front-end. This library is in it's early stages and was designed around an [AWS AppSync](https://aws.amazon.com/appsync/) [GraphQL](https://graphql.org) API.  

## Getting Started

Add as a dependency to your project:

    yarn add @groundbreaker/qewl

  or

    npm install @groundbreaker/qewl

## API

### withSchema()

This decorator uses the grapqhl hoc from the react-apollo library to perform an introspection query using the client context provided by the ApolloProvider you are using to wrap your app.

#### Example

```js
import { withSchema } from "@groundbreaker/qewl";

let App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

App = withSchema()(App)

export default App;
```

#### Return Value

This decorator sets the `apiSchema` prop for the decorated component that has the following structure.

```js
{
  enums: [],
  filterTypes: [],
  mutations: [],
  queries: [],
  inputTypes: [] 
}
```

### decorateDetail(<LoadingComponent />, <ErrorComponent />, resourceName, fields, params = {}, queryName = null)

This decorator uses the grapqhl hoc from the react-apollo library and the branch hoc from the recompose library to execute the typical pattern seen when fetching a singleton record from a graphql api.

- Renders the <LoadingComponent /> argument when the client is executing the request.
- Renders the <ErrorComponent /> argument when the client returns an error.
- Renders the decorated component with the `data` prop, which contains the requested data with the fields passed in the `fields` argument.

This decorator makes the assumption that an `id` must be passed as a variable to grapqhql query to retrieve a singleton record. If an `id` is not passed in the `params` argument the decorator will look for an `id` parameter in the `match` prop that `react-router-dom` makes available to its routes.

If a `queryName` is not passed as an argument the decorator defaults to `get${resourceName}` where `resourceName` is the `resourceName` argument. 

#### Example

```js
import { decorateDetail } from "@groundbreaker/qewl";
import Loading from 'common/loading';
import BannerError from 'common/error';

let Detail = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

Detail = decorateDetail(
  Loading,
  BannerError,
  'Account',
  'id name status', 
  { id: '123' },
  'getAccount'
)(Detail)

export default Detail;
```

#### Return Value

```js
props.data = {
  __typename: 'Account',
  id: '72fe3969-cf72-4aa6-bf61-c3c647fa543c',
  name: 'Foo',
  status: 'Active'
}
```

### decorateList(<LoadingComponent />, <ErrorComponent />, resourceName, fields, params = {}, queryName = null)

This decorator uses the grapqhl hoc from the react-apollo library and the branch hoc from the recompose library to execute the typical pattern seen when fetching a collection records from a graphql api.

- Renders the <LoadingComponent /> argument when the client is executing the request.
- Renders the <ErrorComponent /> argument when the client returns an error.
- Renders the decorated component with the `data` prop, which contains a collection of records with the fields passed in the `fields` argument.

If a `queryName` is not passed as an argument the decorator defaults to `list${pluralize(resourceName)}` where `resourceName` is the `resourceName` argument. 

#### Example

```js
import { decorateList } from "@groundbreaker/qewl";
import Loading from 'common/loading';
import BannerError from 'common/error';

let List = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  )
}

List = decorateDetail(
  Loading,
  BannerError,
  'Account',
  'id name status', 
  { company_id: '1234' },
  'listAccounts'
)(List)

export default List;
```

#### Return Value

```js
[
  {
    __typename: 'Account',
    id: '72fe3969-cf72-4aa6-bf61-c3c647fa543c',
    name: 'Foo',
    status: 'Active'
  },
  {
    __typename: 'Account',
    id: '72fe3679-cg09-4bb6-bf61-c3c647fa543c',
    name: 'Bar',
    status: 'Inactive'
  }
]
```