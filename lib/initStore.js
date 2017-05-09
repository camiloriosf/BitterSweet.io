import { createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import getReducer from './reducer';
import createMiddleware from './middleware';

let reduxStore = null;

export const initStore = (client, initialState) => {
  let store;
  if (!process.browser || !reduxStore) {
    const middleware = createMiddleware([client.middleware(), reduxThunk]);
    store = createStore(getReducer(client), initialState, middleware);
    if (!process.browser) {
      return store;
    }
    reduxStore = store;
  }
  return reduxStore;
};
