import {
  CreateUserFailurePayload,
  CreateUserSuccessPayload,
  GetAllUsersFailurePayload,
  GetAllUsersSuccessPayload,
  GetOneUserFailurePayload,
  GetOneUserRequestPayload,
  GetOneUserSuccessPayload,
  UpdateUserFailurePayload,
  UpdateUserRequestPayload,
  UpdateUserSuccessPayload,
  User,
  usersActionsTypes,
} from '../../types';

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

export function createUserRequest(payload: Omit<User, 'id'>) {
  return {
    type: usersActionsTypes.CREATE_USER_REQUEST,
    payload
  };
}

export function createUserSuccess(payload: CreateUserSuccessPayload) {
  return {
    type: usersActionsTypes.CREATE_USER_SUCCESS,
    payload
  };
}

export function createUserFailure(payload: CreateUserFailurePayload) {
  return {
    type: usersActionsTypes.CREATE_USER_FAILURE,
    payload
  };
}

export function updateUserRequest(payload: UpdateUserRequestPayload) {
  return {
    type: usersActionsTypes.UPDATE_USER_REQUEST,
    payload
  };
}

export function updateUserSuccess(payload: UpdateUserSuccessPayload) {
  return {
    type: usersActionsTypes.UPDATE_USER_SUCCESS,
    payload
  };
}

export function updateUserFailure(payload: UpdateUserFailurePayload) {
  return {
    type: usersActionsTypes.UPDATE_USER_FAILURE,
    payload
  };
}

export function getOneUserRequest(payload: GetOneUserRequestPayload) {
  return {
    type: usersActionsTypes.GET_ONE_USER_REQUEST,
    payload
  };
}

export function getOneUserSuccess(payload: GetOneUserSuccessPayload) {
  return {
    type: usersActionsTypes.GET_ONE_USER_SUCCESS,
    payload
  };
}

export function getOneUserFailure(payload: GetOneUserFailurePayload) {
  return {
    type: usersActionsTypes.GET_ONE_USER_FAILURE,
    payload
  };
}
