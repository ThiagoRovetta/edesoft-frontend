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
}

export interface usersState {
  users: User[];
  error: string | null;
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

export type UsersActions =
  | GetAllUsersRequest
  | GetAllUsersSuccess
  | GetAllUsersFailure
  | CreateUserRequest
  | CreateUserSuccess
  | CreateUserFailure;
