import {
  APP_UPDATE_STATUS_POST_LOADER,
  APP_UPDATE_STATUS_POST_SUCCESS,
  APP_UPDATE_STATUS_POST_FAILURE,
} from '@redux/types';
const initialState = {
  //App Update Status Data
  appUpdateStatusPostFetching: false,
  appUpdateStatusPostSuccess: false,
  appUpdateStatusPostError: false,
  appUpdateStatusPostErrorMessage: '',
  appUpdateStatusPostUpdate: '',
  appUpdateStatusPost: '',
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case APP_UPDATE_STATUS_POST_LOADER:
      return {
        ...state,
        appUpdateStatusPostFetching: true,
      };

    case APP_UPDATE_STATUS_POST_SUCCESS:
      console.warn('action.data--', action.data);
      return {
        ...state,
        appUpdateStatusPostFetching: false,
        appUpdateStatusPostSuccess: true,
        appUpdateStatusPostUpdate: action.data,
      };
    case APP_UPDATE_STATUS_POST_FAILURE:
      return {
        ...state,
        appUpdateStatusPostFetching: false,
        appUpdateStatusPostError: true,
        appUpdateStatusPostUpdate: action.error,
        appUpdateStatusPostErrorMessage: action.error,
      };

    default:
      return state;
  }
}
