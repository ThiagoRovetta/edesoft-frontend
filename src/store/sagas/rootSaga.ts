import { all } from 'redux-saga/effects';

import loading from '../sagas/loadingSaga';

export function* rootSaga() {
  yield all([loading]);
}
