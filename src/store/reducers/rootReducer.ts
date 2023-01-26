import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
