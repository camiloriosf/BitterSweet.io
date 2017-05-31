import { SUBMIT_CONTACT_FORM, SUBMIT_ERROR } from '../types/index';

export default function (state = {}, action) {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM:
      return { ...state, sent: true, error: false };
    case SUBMIT_ERROR:
      return { ...state, error: true, errorMessage: action.payload, sent: false };
    default:
      return state;
  }
}
