import { combineReducers } from 'redux';
import contact from './reducers/contact';
import quote from './reducers/quote';

export default function getReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    contact,
    quote,
  });
}
