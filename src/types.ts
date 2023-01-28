export enum loadingActionsTypes {
  LOADING_REQUEST = 'LOADING_REQUEST',
  SHOW_LOADING = 'SHOW_LOADING',
  HIDE_LOADING = 'HIDE_LOADING',
}

export interface loadingState {
  isLoading: boolean,
}

export interface LoadingRequest {
  type: typeof loadingActionsTypes.LOADING_REQUEST;
  payload: boolean;
}

export type ShowLoading = {
  type: typeof loadingActionsTypes.SHOW_LOADING;
};

export type HideLoading = {
  type: typeof loadingActionsTypes.HIDE_LOADING;
};

export type LoadingActions =
  | LoadingRequest
  | ShowLoading
  | HideLoading;

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  }
  phone: string;
}

export enum usersActionsTypes {
  GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST',
  GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS',
  GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE',
  CREATE_USER_REQUEST = 'CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
  CREATE_USER_FAILURE = 'CREATE_USER_FAILURE',
  UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE',
  GET_ONE_USER_REQUEST = 'GET_ONE_USER_REQUEST',
  GET_ONE_USER_SUCCESS = 'GET_ONE_USER_SUCCESS',
  GET_ONE_USER_FAILURE = 'GET_ONE_USER_FAILURE',
  DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE = 'DELETE_USER_FAILURE',
}

export interface usersState {
  users: User[];
  error: string | null;
  currentUser: User | null;
}

export interface GetAllUsersSuccessPayload {
  users: User[];
}

export interface GetAllUsersFailurePayload {
  error: string;
}

export interface GetAllUsersRequest {
  type: typeof usersActionsTypes.GET_ALL_USERS_REQUEST;
}

export type GetAllUsersSuccess = {
  type: typeof usersActionsTypes.GET_ALL_USERS_SUCCESS;
  payload: GetAllUsersSuccessPayload;
};

export type GetAllUsersFailure = {
  type: typeof usersActionsTypes.GET_ALL_USERS_FAILURE;
  payload: GetAllUsersFailurePayload;
};

export interface CreateUserSuccessPayload {
  user: User;
}

export interface CreateUserFailurePayload {
  error: string;
}

export interface CreateUserRequest {
  type: typeof usersActionsTypes.CREATE_USER_REQUEST;
  payload: Omit<User, 'id'>;
}

export type CreateUserSuccess = {
  type: typeof usersActionsTypes.CREATE_USER_SUCCESS;
  payload: CreateUserSuccessPayload;
};

export type CreateUserFailure = {
  type: typeof usersActionsTypes.CREATE_USER_FAILURE;
  payload: CreateUserFailurePayload;
};

export interface UpdateUserRequestPayload {
  id: number;
  data: Omit<User, 'id'>;
}

export interface UpdateUserSuccessPayload {
  user: User;
}

export interface UpdateUserFailurePayload {
  error: string;
}

export interface UpdateUserRequest {
  type: typeof usersActionsTypes.UPDATE_USER_REQUEST;
  payload: UpdateUserRequestPayload;
}

export type UpdateUserSuccess = {
  type: typeof usersActionsTypes.UPDATE_USER_SUCCESS;
  payload: UpdateUserSuccessPayload;
};

export type UpdateUserFailure = {
  type: typeof usersActionsTypes.UPDATE_USER_FAILURE;
  payload: UpdateUserFailurePayload;
};

export interface GetOneUserRequestPayload {
  id: number;
}

export interface GetOneUserSuccessPayload {
  user: User;
}

export interface GetOneUserFailurePayload {
  error: string;
}

export interface GetOneUserRequest {
  type: typeof usersActionsTypes.GET_ONE_USER_REQUEST;
  payload: GetOneUserRequestPayload;
}

export type GetOneUserSuccess = {
  type: typeof usersActionsTypes.GET_ONE_USER_SUCCESS;
  payload: GetOneUserSuccessPayload;
};

export type GetOneUserFailure = {
  type: typeof usersActionsTypes.GET_ONE_USER_FAILURE;
  payload: GetOneUserFailurePayload;
};

export interface DeleteUserRequestPayload {
  id: number;
}

export interface DeleteUserSuccessPayload {
  id: number;
}

export interface DeleteUserFailurePayload {
  error: string;
}

export interface DeleteUserRequest {
  type: typeof usersActionsTypes.DELETE_USER_REQUEST;
  payload: DeleteUserRequestPayload;
}

export type DeleteUserSuccess = {
  type: typeof usersActionsTypes.DELETE_USER_SUCCESS;
  payload: DeleteUserSuccessPayload;
};

export type DeleteUserFailure = {
  type: typeof usersActionsTypes.DELETE_USER_FAILURE;
  payload: DeleteUserFailurePayload;
};

export type UsersActions =
  | GetAllUsersRequest
  | GetAllUsersSuccess
  | GetAllUsersFailure
  | CreateUserRequest
  | CreateUserSuccess
  | CreateUserFailure
  | UpdateUserRequest
  | UpdateUserSuccess
  | UpdateUserFailure
  | GetOneUserRequest
  | GetOneUserSuccess
  | GetOneUserFailure
  | DeleteUserRequest
  | DeleteUserSuccess
  | DeleteUserFailure;
