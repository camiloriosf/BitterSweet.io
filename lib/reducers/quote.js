import { UPDATE_QUOTE } from '../types/index';

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_QUOTE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
