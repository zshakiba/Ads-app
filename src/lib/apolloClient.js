// src/lib/apolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://your-graphql-endpoint.com/graphql", // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default apolloClient;