import {
  APP_UPDATE_STATUS_POST_LOADER,
  APP_UPDATE_STATUS_POST_SUCCESS,
  APP_UPDATE_STATUS_POST_FAILURE,
} from '@redux/types';
import {Url} from '@api/apiUrl';
import axios from 'axios';
export function showLoadingIndicator(type) {
  return {
    type: type,
  };
}

export function onSuccess(data, type) {
  return {
    type: type,
    data,
  };
}

export function onFailure(error, type) {
  return {
    type: type,
    error,
  };
}

export function getAppUpdateStatus(payload) {
  return async dispatch => {
    dispatch(showLoadingIndicator(APP_UPDATE_STATUS_POST_LOADER));
    axios({
      method: 'POST',
      url: `${Url.API_BASE_URL}getAppUpdateStatus`,
      data: payload,
    })
      .then(response => {
        // console.warn('response.data----', response.data);
        if (response.data.success) {
          dispatch(
            onSuccess(response.data.update, APP_UPDATE_STATUS_POST_SUCCESS),
          );
        } else {
          dispatch(onFailure('Nonee', APP_UPDATE_STATUS_POST_FAILURE));
        }
      })
      .catch(err => {
        if (err && err.response && err.response.status !== 401) {
          dispatch(
            onFailure('SoemThing Went Wrong', APP_UPDATE_STATUS_POST_FAILURE),
          );
        }
      });
  };
}
