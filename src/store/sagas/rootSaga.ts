import { all, fork } from 'redux-saga/effects';

import loading from '../sagas/loadingSaga';
import users from '../sagas/usersSaga';

export function* rootSaga() {
  yield all([fork(loading), fork(users)]);
}
