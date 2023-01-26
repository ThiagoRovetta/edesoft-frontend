import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import {
  getAllUsersSuccess,
  getAllUsersFailure
} from '../actions/usersActions';
import { setLoading } from '../actions/loadingActions';
import { User, usersActionsTypes } from '../../types';
import { getAllUsers } from '../../services/users';


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

function* postsSaga() {
  yield all([takeLatest(usersActionsTypes.GET_ALL_USERS_REQUEST, getAllUsersSaga)]);
}

export default postsSaga;
