# qewl
A toolbelt designed to eliminate the boilerplate code that comes with consuming [GraphQL](https://graphql.org) API's via a [React](https://reactjs.org) and [Apollo](https://www.apollographql.com) front-end. This library is in it's early stages and was designed around an [AWS AppSync](https://aws.amazon.com/appsync/) [GraphQL](https://graphql.org) API.  

## Getting Started

Add as a dependency to your project:

    yarn add @groundbreaker/qewl

  or

    npm install @groundbreaker/qewl

## Usage

### Creating an instance of Qewl

```js
const Qewl = require('@groundbreaker/qewl');

service = new Qewl({ client: client, resources: resources });
```

### Options

- `client` - Initialized instance of an Apollo Client. **Required**
- `resources` (object) - An object describing the resources available in your GraphQL API. **Required**

```js
const resources = {
  foo: {
    detail: { fields: "id" },
    list: {
      fields: "id"
    }
  },
  bar: {
    detail: { fields: "id name status" },
    list: {
      fields: "id status"
    }
  }
};
```

The library expects this object to have your resources as the top level keys in singularized form. The fields key/value pair is a GraphQL query style list of fields that you would like your API to return by default on collection and detail requests. 

## API

Currently this library makes a few assumptions about the setup of your GraphQL API and it assumes RESTful route patterns are used on the front-end when using the route decorators. As this library evolves it is our hope that these assumptions will be written out of the library.

### GraphQL API Assumptions

- Mutation naming pattern
  - `create` - `createResourceName`
  - `delete` - `deleteResourceName`
  - `update` - `updateResourceName`
- Mutation Input Types naming pattern
  - `create` - `CreateResourceNameInput`
  - `delete` - `DeleteResourceNameInput`
  - `update` - `UpdateResourceNameInput`
- Query naming pattern 
  - `collection` - `listResourceNames`
  - `singleton` - `getResourceName`
- Query Filter Input Types naming pattern
  - `ResourceNameFilterInput`

### Qewl#schema()

This uses the client provided to the current instance of Qewl and executes an Introspection Query and then parses it into a digestable object that describes your API.

#### Example

```js
const Qewl = require('@groundbreaker/qewl');
service = new Qewl(client, resources);

service.schema()
.then((data) => {
  // do something with data
  console.log(data);
})
.catch((error) => {
  console.error(error);
});
```

#### Return Value

```js
{
  enums: [],
  filterTypes: [],
  mutations: [],
  queries: [],
  inputTypes: [] 
}
```

Each key value pair returned contains a filtered array of objects that match respective key's type. These objects are in the format that the Graphql AST uses to describe your API.

### Qewl#detail(queryName, params, requestedFields = 'id')

This uses the client provided to the current instance of Qewl and generates a [gql](https://github.com/apollographql/graphql-tag) query based on the required `queryName` and `params` arguments and then executes the generated query. The required `params` argument expects an `id` key/value pair that has an ID scalar type value. The `requestedFields` argument is optional and is a [gql](https://github.com/apollographql/graphql-tag) style string describing the requested response fields based on the type in your API, this defaults to requesting the `id` for respective type by default.

#### Example

```js
const Qewl = require('@groundbreaker/qewl');
service = new Qewl(client, resources);

service.detail(
  'getFoo',
  {
    id: '72fe3969-cf72-4aa6-bf61-c3c647fa543c'
  },
  'id name status'
)
.then((data) => {
  // do something with data
  console.log(data);
})
.catch((error) => {
  console.error(error);
});
```

#### Return Value

```js
{
  __typename: 'Foo',
  id: '72fe3969-cf72-4aa6-bf61-c3c647fa543c',
  name: 'Foo',
  status: 'Active'
}
```

### Qewl#list(queryName, requestedFields = 'id', params = null)

This uses the client provided to the current instance of Qewl and generates a [gql](https://github.com/apollographql/graphql-tag) query based on the required `queryName` argument and then executes the generated query. The optional `params` argument is an object that is directly passed to the Apollo client's variables paramater on the query method. The `requestedFields` argument is optional and is a [gql](https://github.com/apollographql/graphql-tag) style string describing the requested response fields based on the type in your API, this defaults to requesting the `id` for respective type by default.

#### Example

```js
const Qewl = require('@groundbreaker/qewl');
service = new Qewl(client, resources);

service.list(
  'listFoos',
  'id name status'
)
.then((data) => {
  // do something with data
  console.log(data);
})
.catch((error) => {
  console.error(error);
});
```

#### Return Value

```js
[
  {
    __typename: 'Foo',
    id: '72fe3969-cf72-4aa6-bf61-c3c647fa543c',
    name: 'Foo',
    status: 'Active'
  },
  {
    __typename: 'Foo',
    id: '72fe3679-cg09-4bb6-bf61-c3c647fa543c',
    name: 'Bar',
    status: 'Inactive'
  }
]
```

### Qewl#mutate(mutationName, inputType, payload, requestedFields = 'id')

This uses the client provided to the current instance of Qewl and generates a [gql](https://github.com/apollographql/graphql-tag) mutation based on the required `mutationName`, `inputType` and `payload` arguments and then executes the generated query. The `payload` argument will be an object that abides by the type definition for the given `inputType`.  The `requestedFields` argument is optional and is a [gql](https://github.com/apollographql/graphql-tag) style string describing the requested response fields based on the type in your API, this defaults to requesting the `id` for respective type by default.

#### Example

```js
const Qewl = require('@groundbreaker/qewl');
service = new Qewl(client, resources);

service.mutate(
  'createFoo',
  'CreateFooInput!',
  {
    name: 'New Foo',
    status: 'Active'
  },
  'id name status'
)
.then((data) => {
  // do something with data
  console.log(data);
})
.catch((error) => {
  console.error(error);
});
```

#### Return Value

```js
{
  __typename: 'Foo',
  id: '72fe4097-cf72-4cc6-hf61-c3c759fa543c',
  name: 'New Foo',
  status: 'Active'
}
```

## Utils API

This library comes with a set of [Recompose](https://github.com/acdlite/recompose) HOC's used to decorate React components with boilerplate functionality common to the types of patterns we've seen when consuming both REST and GraphQL API's i.e. loading states, error handlers, data fetching, etc.  

Currently, the decorators rely on an instance of the Qewl service and the schema returned by Qewl#schema() to be available in the props as `api` and `apiSchema` of the React component you are decorating.

We recommend doing this by initializing an instance of the Qewl service and passing it in as props via [React Router](https://reacttraining.com/react-router).

#### Example

```js
import { Route, Switch } from "react-router-dom";
const Qewl = require("@groundbreaker/qewl");

initializeQewl = () => {
  const api = new Qewl(this.props.client, resources);
  api.schema().then(apiSchema =>
    this.setState({
      api,
      apiSchema
    })
  );
};

render() {
  const { api, apiSchema } = this.state;

  return (
    <Switch>
      <Route 
        to='/foo'
        render={(props) =>
          <Component {...props} api={api} apiSchema={apiSchema} />
        }
      />
    </Switch>
  )
}
```

###decorateCreate(loadingComponent, resourceName)
###decorateDetail (loadingComponent, resourceName)
###decorateList(loadingComponent, resourceName)
###decorateUpdate(loadingComponent, resourceName)
