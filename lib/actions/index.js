import { INDEX_SECTION, INDEX_HEADER } from '../types/types';

export function changeSection({ section }) {
  return function ChangeDestination(dispatch) {
    dispatch({ type: INDEX_SECTION, payload: section });
  };
}

export function changeHeader(options) {
  return function ChangeHeader(dispatch) {
    dispatch({ type: INDEX_HEADER, payload: options });
  };
}
