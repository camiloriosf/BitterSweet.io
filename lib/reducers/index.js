import { INDEX_SECTION, INDEX_HEADER } from '../types/types';

export default function (state = {}, action) {
  switch (action.type) {
    case INDEX_SECTION:
      return { ...state, section: action.payload };
    case INDEX_HEADER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
