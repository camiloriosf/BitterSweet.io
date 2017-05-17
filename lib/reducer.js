import { combineReducers } from 'redux';
import index from './reducers/index';

export default function getReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    index,
  });
}
