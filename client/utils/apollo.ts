import { ApolloClient, DocumentNode, InMemoryCache } from '@apollo/client';

import { createUploadLink } from 'apollo-upload-client';

type Query = <QV, RT>(name: string, query: DocumentNode, variables?: QV) => Promise<RT>;
type Mutate = <MV, RT>(name: string, mutation: DocumentNode, variables?: MV) => Promise<RT>;
console.log(`Attempt connect to ${process.env.GRAPHQL_URI}`)

const cache = new InMemoryCache({
  addTypename: false,
  resultCaching: false,
});

const apolloClient = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: createUploadLink({
    uri: process.env.GRAPHQL_URI,
    includeUnusedVariables: false,
    credentials: 'include',
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
})

export type GraphQLClient = {
  query: Query;
  mutate: Mutate;
};

export const createGQLClient = (): GraphQLClient => {


  const query: Query = (name, query, variables) => {
    return apolloClient
      .query({
        query,
        variables,
        fetchPolicy: 'no-cache',
      })
      .then(({ data }) => data[name]);
  };

  const mutate: Mutate = (name, mutation, variables) => {
    return apolloClient
      .mutate({
        mutation,
        variables,
      })
      .then(({ data }) => data[name]);
  };

  return { query, mutate };
};

export default  apolloClient;
