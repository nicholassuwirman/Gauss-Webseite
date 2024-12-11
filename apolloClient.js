import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Create the Apollo Client instance
const client = new ApolloClient({
  uri: 'https://gauss-infinity.kesug.com/graphql', // Replace with your WordPress GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
