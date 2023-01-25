import { LOADING } from '../constants';

export interface SetLoadingAction {
  type: string;
  payload: boolean;
}

export function setLoading(data: boolean) {
  return {
    type: LOADING.LOADING_REQUEST,
    payload: data,
  };
}

export function showLoading() {
  return {
    type: LOADING.SHOW_LOADING,
  };
}

export function hideLoading() {
  return {
    type: LOADING.HIDE_LOADING,
  };
}
