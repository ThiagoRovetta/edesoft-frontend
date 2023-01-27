import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import {
  getAllUsersSuccess,
  getAllUsersFailure,
  createUserSuccess,
  createUserFailure
} from '../actions/usersActions';
import { setLoading } from '../actions/loadingActions';
import { CreateUserRequest, User, usersActionsTypes } from '../../types';
import { getAllUsers, addUser } from '../../services/users';

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

    payload.payload.password = 'sfdfjnsdfjks';

    const response: AxiosResponse<Pick<User, 'id'>> = yield call(addUser, payload.payload);
    console.log('response', response);

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

function* usersSaga() {
  yield all(
    [
      takeLatest(usersActionsTypes.GET_ALL_USERS_REQUEST, getAllUsersSaga),
      takeLatest(usersActionsTypes.CREATE_USER_REQUEST, createUserSaga),
    ]
  );
}

export default usersSaga;
