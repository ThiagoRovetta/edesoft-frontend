import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
