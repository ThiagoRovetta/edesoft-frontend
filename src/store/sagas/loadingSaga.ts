import { all, takeLatest, put } from 'redux-saga/effects';

import { setLoading, showLoading, hideLoading } from '../actions/loadingActions';

function* updateLoading({ payload }: ReturnType<typeof setLoading>) {
  if (payload) {
    yield put(showLoading());
  } else {
    yield put(hideLoading());
  }
}

export default all([takeLatest(setLoading, updateLoading)]);
