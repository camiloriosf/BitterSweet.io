import { HEADER_COLOR, SUBMIT_CONTACT_FORM, SUBMIT_ERROR, UPDATE_QUOTE, UPDATE_PRICE, HIDE_QUOTE_FORM, SUBMIT_QUOTE_FORM, SUBMIT_QUOTE_ERROR } from '../types/index.js';

export function updateHeader(visible) {
  return function UpdateHeader(dispatch) {
    dispatch({ type: HEADER_COLOR, payload: visible });
  };
}

export function submitForm({ name, email, comment }) {
  return function SubmitForm(dispatch) {
    dispatch({ type: SUBMIT_CONTACT_FORM });
  };
}

export function submitError({ message }) {
  return function SubmitError(dispatch) {
    dispatch({ type: SUBMIT_ERROR, payload: message });
  };
}

export function updateQuote({ values }) {
  return function UpdateQuote(dispatch) {
    dispatch({ type: UPDATE_QUOTE, payload: values });
  };
}

export function updatePrice({ fee, service }) {
  return function UpdatePrice(dispatch) {
    dispatch({ type: UPDATE_PRICE, payload: { fee, service } });
  };
}

export function hideQuoteForm(value) {
  return function HideQuoteForm(dispatch) {
    dispatch({ type: HIDE_QUOTE_FORM, payload: value });
  };
}

export function submitQuoteForm({ name, email, comment }) {
  return function SubmitQuoteForm(dispatch) {
    dispatch({ type: SUBMIT_QUOTE_FORM });
  };
}

export function submitQuoteError({ message }) {
  return function SubmitQuoteError(dispatch) {
    dispatch({ type: SUBMIT_QUOTE_ERROR, payload: message });
  };
}
