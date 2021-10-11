import {ApolloClient, DocumentNode, InMemoryCache} from '@apollo/client';
import {GraphQLClient, request} from 'graphql-request'
import {createUploadLink} from 'apollo-upload-client';

type Query = <QV, RT>(query: DocumentNode, variables?: QV, authToken?: string) => Promise<RT>;
type Mutate = <MV, RT>(mutation: DocumentNode, variables?: MV, authToken?: string) => Promise<RT>;
console.log(`Attempt connect to ${process.env.GRAPHQL_URI}`)

const cache = new InMemoryCache({
  addTypename: false,
  resultCaching: false,
});
const graphQLClient = new GraphQLClient(process.env.GRAPHQL_URI, {
  headers: {
    authorization: 'Bearer MY_TOKEN',
  },
})
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

export type GraphQLClientResponse = {
  query: Query;
  mutate: Mutate;
};

export const createGQLClient = (): GraphQLClientResponse => {
  const query: Query = (query, variables, authToken) => {
    let requestHeaders = {}
    if (authToken)
      requestHeaders = {
        authorization: 'Bearer ' + authToken
      }
    return graphQLClient
      .request(query, variables, requestHeaders);
  };

  const mutate: Mutate = (mutation, variables, authToken) => {
    let requestHeaders = {}
    if (authToken)
      requestHeaders = {
        authorization: 'Bearer ' + authToken
      }
    return graphQLClient
      .request(mutation, variables, requestHeaders);
  };

  return {query, mutate};
};

export default apolloClient;
