import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import {
  getAllUsersSuccess,
  getAllUsersFailure,
  createUserSuccess,
  createUserFailure,
  updateUserSuccess,
  updateUserFailure,
  getOneUserSuccess,
  getOneUserFailure,
  deleteUserSuccess,
  deleteUserFailure
} from '../actions/usersActions';
import { setLoading } from '../actions/loadingActions';
import { CreateUserRequest, GetOneUserRequest, UpdateUserRequest, User, usersActionsTypes } from '../../types';
import { getAllUsers, addUser, editUser, getOneUser, deleteUser } from '../../services/users';

function* getAllUsersSaga() {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<User[]> = yield call(getAllUsers);

    yield put(
      getAllUsersSuccess({
        users: response.data
      })
    );

    yield put(setLoading(false));
  } catch (error: any) {
    yield put(setLoading(false));

    yield put(
      getAllUsersFailure({
        error: String(error.message)
      })
    );
  }
}

function* createUserSaga(payload: CreateUserRequest) {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<Pick<User, 'id'>> = yield call(addUser, payload.payload);

    yield put(
      createUserSuccess({
        user: {
          id: response.data.id,
          ...payload.payload
        }
      })
    );

    yield put(setLoading(false));
  } catch (error: any) {
    yield put(setLoading(false));

    yield put(
      createUserFailure({
        error: String(error.message)
      })
    );
  }
}

function* updateUserSaga({ payload }: UpdateUserRequest) {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<Omit<User, 'id'>> = yield call(editUser, payload.id, payload.data);
    yield put(
      updateUserSuccess({
        user: {
          id: payload.id,
          ...response.data
        }
      })
    );

    yield put(setLoading(false));
  } catch (error: any) {
    yield put(setLoading(false));

    yield put(
      updateUserFailure({
        error: String(error.message)
      })
    );
  }
}

function* getOneUserSaga({ payload }: GetOneUserRequest) {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<User | null> = yield call(getOneUser, payload.id);

    if (response.data === null) {
      yield put(
        getOneUserFailure({
          error: 'Usuário não encontrado!'
        })
      );
    } else {
      yield put(
        getOneUserSuccess({
          user: response.data
        })
      );
    }

    yield put(setLoading(false));
  } catch (error: any) {
    yield put(setLoading(false));

    yield put(
      getOneUserFailure({
        error: String(error.message)
      })
    );
  }
}

function* deleteUserSaga({ payload }: UpdateUserRequest) {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<User | null> = yield call(deleteUser, payload.id);

    if (response.data === null) {
      yield put(
        deleteUserFailure({
          error: 'Usuário não encontrado!'
        })
      );
    } else {
      yield put(
        deleteUserSuccess({
          id: payload.id
        })
      );
    }

    yield put(setLoading(false));
  } catch (error: any) {
    yield put(setLoading(false));

    yield put(
      deleteUserFailure({
        error: String(error.message)
      })
    );
  }
}

function* usersSaga() {
  yield all(
    [
      takeLatest(usersActionsTypes.GET_ALL_USERS_REQUEST, getAllUsersSaga),
      takeLatest(usersActionsTypes.CREATE_USER_REQUEST, createUserSaga),
      takeLatest(usersActionsTypes.UPDATE_USER_REQUEST, updateUserSaga),
      takeLatest(usersActionsTypes.GET_ONE_USER_REQUEST, getOneUserSaga),
      takeLatest(usersActionsTypes.DELETE_USER_REQUEST, deleteUserSaga),
    ]
  );
}

export default usersSaga;
