import produce from 'immer';

import { usersState, UsersActions, usersActionsTypes } from '../../types';

export const INITIAL_STATE: usersState = {
  users: [],
  error: null,
  currentUser: null,
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
    case usersActionsTypes.CREATE_USER_REQUEST: {
      break;
    }
    case usersActionsTypes.CREATE_USER_SUCCESS: {
      draft.users.push(action.payload.user);
      break;
    }
    case usersActionsTypes.CREATE_USER_FAILURE: {
      draft.error = action.payload.error;
      break;
    }
    case usersActionsTypes.UPDATE_USER_REQUEST: {
      break;
    }
    case usersActionsTypes.UPDATE_USER_SUCCESS: {
      const index = draft.users.findIndex(user => user.id === action.payload.user.id);

      if (index !== -1) {
        draft.users[index] = action.payload.user;
      }

      break;
    }
    case usersActionsTypes.UPDATE_USER_FAILURE: {
      draft.error = action.payload.error;
      break;
    }
    case usersActionsTypes.GET_ONE_USER_REQUEST: {
      break;
    }
    case usersActionsTypes.GET_ONE_USER_SUCCESS: {
      draft.currentUser = action.payload.user;
      break;
    }
    case usersActionsTypes.GET_ONE_USER_FAILURE: {
      draft.error = action.payload.error;
      break;
    }
    case usersActionsTypes.DELETE_USER_REQUEST: {
      break;
    }
    case usersActionsTypes.DELETE_USER_SUCCESS: {
      const index = draft.users.findIndex(user => user.id === action.payload.id);

      if (index !== -1) {
        draft.users.splice(index, 1);
      }

      break;
    }
    case usersActionsTypes.DELETE_USER_FAILURE: {
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
