import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import {
  ApolloClient, createNetworkInterface, ApolloProvider
} from 'react-apollo';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import AppReducer from './redux/reducers.js'

const myOAuthToken = 'Bearer '

const networkInterface = createNetworkInterface({
  uri: 'https://app.pipefy.com/queries',
  opts: {
    headers: {
      'Authorization': myOAuthToken,
    }
  }
});

const client = new ApolloClient({
  networkInterface: networkInterface
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

console.log(store)

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
