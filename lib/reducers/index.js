import { HEADER_COLOR } from '../types/index';

export default function (state = {}, action) {
  switch (action.type) {
    case HEADER_COLOR:
      return { ...state, header: action.payload };
    default:
      return state;
  }
}
