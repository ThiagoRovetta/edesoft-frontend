import produce from 'immer';

import { usersState, UsersActions, usersActionsTypes } from '../../types';

export const INITIAL_STATE: usersState = {
  users: [],
  error: null
};

export function usersReducer(state = INITIAL_STATE, action: UsersActions) {
  return produce(state, (draft) => {
    switch (action.type) {
    case usersActionsTypes.GET_ALL_USERS_REQUEST: {
      break;
    }
    case usersActionsTypes.GET_ALL_USERS_SUCCESS: {
      draft.users = action.payload.users;
      break;
    }
    case usersActionsTypes.GET_ALL_USERS_FAILURE: {
      draft.error = action.payload.error;
      break;
    }
    default:
      return {
        ...state
      };
    }
  });
}
