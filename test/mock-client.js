import { makeRemoteExecutableSchema } from "graphql-tools";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import fetch from "node-fetch";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.APPSYNC_URI,
  headers: { "X-API-KEY": process.env.APPSYNC_API_KEY },
  fetch
});

const schema = async () => {
  const schema = await introspectSchema(link);
  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link
  });

  return executableSchema;
};

export default new ApolloClient({
  link: new SchemaLink({ schema: schema }),
  cache
});
