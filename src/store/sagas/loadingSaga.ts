import { all, takeLatest, put } from 'redux-saga/effects';

import { loadingActionsTypes } from '../../types';
import { setLoading, showLoading, hideLoading } from '../actions/loadingActions';

function* updateLoading({ payload }: ReturnType<typeof setLoading>) {
  if (payload) {
    yield put(showLoading());
  } else {
    yield put(hideLoading());
  }
}

function* loadingSaga() {
  yield all([takeLatest(loadingActionsTypes.LOADING_REQUEST, updateLoading)]);
}

export default loadingSaga;
