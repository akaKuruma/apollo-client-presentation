import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://app.pipefy.com/queries'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

export default client
