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
