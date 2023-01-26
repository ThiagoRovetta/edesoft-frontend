import { GetAllUsersFailurePayload, GetAllUsersSuccessPayload, usersActionsTypes } from '../../types';

export function getAllUsersRequest() {
  return {
    type: usersActionsTypes.GET_ALL_USERS_REQUEST,
  };
}

export function getAllUsersSuccess(payload: GetAllUsersSuccessPayload) {
  return {
    type: usersActionsTypes.GET_ALL_USERS_SUCCESS,
    payload
  };
}

export function getAllUsersFailure(payload: GetAllUsersFailurePayload) {
  return {
    type: usersActionsTypes.GET_ALL_USERS_FAILURE,
    payload
  };
}
