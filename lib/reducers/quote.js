import { UPDATE_QUOTE, UPDATE_PRICE, HIDE_QUOTE_FORM, SUBMIT_QUOTE_FORM, SUBMIT_QUOTE_ERROR } from '../types/index';

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_QUOTE:
      return { ...state, ...action.payload };
    case UPDATE_PRICE:
      return { ...state, ...action.payload };
    case HIDE_QUOTE_FORM:
      return { ...state, hidden: action.payload, sent: false, error: false, errorMessage: '' };
    case SUBMIT_QUOTE_FORM:
      return { ...state, sent: true, error: false };
    case SUBMIT_QUOTE_ERROR:
      return { ...state, error: true, errorMessage: action.payload, sent: false };
    default:
      return state;
  }
}
