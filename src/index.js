import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
  toIdValue,
} from 'react-apollo';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import AppReducer from './redux/reducers.js'

const myOAuthToken = 'Bearer '

const dataIdFromObject = o => {
  if (o.__typename != null && o.id != null) {
    return `${o.__typename}:${o.id}`;
  }
}

const networkInterface = createNetworkInterface({
  uri: 'https://app.pipefy.com/queries',
  opts: {
    headers: {
      'Authorization': myOAuthToken,
    }
  },
  dataIdFromObject,
});

const client = new ApolloClient({
  networkInterface: networkInterface,
  customResolvers: {
    Query: {
      oneOrganization: (_, { id }) => toIdValue(dataIdFromObject({ __typename: 'Organization', id })),
      oneTable: (_, { id }) => toIdValue(dataIdFromObject({ __typename: 'Table', id })),
    },
  },
})

const store = createStore(
  combineReducers({
    appStore: AppReducer,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
