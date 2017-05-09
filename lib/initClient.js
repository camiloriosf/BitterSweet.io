import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { GRAPHQL_URI } from './config/config';

let apolloClient = null;

function InitClient(headers, initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: createNetworkInterface({
      uri: GRAPHQL_URI,
      opts: {
        credentials: 'same-origin',
        // Pass headers here if your graphql server requires them
      },
    }),
  });
}

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return InitClient(headers, initialState);
  }
  if (!apolloClient) {
    apolloClient = InitClient(headers, initialState);
  }
  return apolloClient;
};
