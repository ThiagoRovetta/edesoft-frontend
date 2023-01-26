import { loadingActionsTypes } from '../../types';

export interface SetLoadingAction {
  type: string;
  payload: boolean;
}

export function setLoading(data: boolean) {
  return {
    type: loadingActionsTypes.LOADING_REQUEST,
    payload: data,
  };
}

export function showLoading() {
  return {
    type: loadingActionsTypes.SHOW_LOADING,
  };
}

export function hideLoading() {
  return {
    type: loadingActionsTypes.HIDE_LOADING,
  };
}
