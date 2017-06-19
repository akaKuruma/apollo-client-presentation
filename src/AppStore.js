import { createStore, combineReducers } from 'redux'
import apolloClient from './apollo-client';
import reducer from './reducers'

const appStore = createStore(combineReducers({
  basicStore: reducer,
  apolloStore: apolloClient.reducer(),
}));

export default appStore;
