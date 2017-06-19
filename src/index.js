import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import appStore from './AppStore'
import client from './apollo-client';

ReactDOM.render(
  <ApolloProvider store={appStore} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
