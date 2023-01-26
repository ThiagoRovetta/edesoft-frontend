import produce from 'immer';

import { LoadingActions, loadingActionsTypes, loadingState } from '../../types';

export const INITIAL_STATE: loadingState = {
  isLoading: false,
};

export function loadingReducer(state = INITIAL_STATE, action: LoadingActions) {
  return produce(state, (draft) => {
    switch (action.type) {
    case loadingActionsTypes.LOADING_REQUEST: {
      break;
    }
    case loadingActionsTypes.SHOW_LOADING: {
      draft.isLoading = true;
      break;
    }
    case loadingActionsTypes.HIDE_LOADING: {
      draft.isLoading = false;
      break;
    }
    }
  });
}
