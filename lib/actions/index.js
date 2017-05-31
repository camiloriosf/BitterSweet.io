import { SUBMIT_CONTACT_FORM, SUBMIT_ERROR, UPDATE_QUOTE } from '../types/index.js';

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
