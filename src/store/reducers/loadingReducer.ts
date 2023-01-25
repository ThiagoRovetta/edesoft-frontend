import { AnyAction } from 'redux';
import produce from 'immer';

import { LOADING } from '../constants';

export const INITIAL_STATE = {
  isLoading: false,
};

export function loadingReducer(state = INITIAL_STATE, action: AnyAction) {
  return produce(state, (draft) => {
    switch (action.type) {
    case LOADING.LOADING_REQUEST: {
      break;
    }
    case LOADING.SHOW_LOADING: {
      draft.isLoading = true;
      break;
    }
    case LOADING.HIDE_LOADING: {
      draft.isLoading = false;
      break;
    }
    }
  });
}
