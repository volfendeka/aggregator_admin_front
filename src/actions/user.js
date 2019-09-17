import {
  LOGIN_PENDING,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../constants';
import {baseUrl} from '../configs/config';
import auth from "../service/auth";
import api from "../service/api";

export const authenticate = (data) => (dispatch) => {
  dispatch({type: LOGIN_PENDING});
  fetch(baseUrl + 'authenticate', {
    method: "POST",
    headers: api.getJSONHeaders(),
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      auth.setToken(data.token);
      dispatch({type: LOGIN_SUCCESS, payload: data});
      window.location.pathname = "/login";
    })
    .catch(error => dispatch({type: LOGIN_FAILED, payload: error}));
};

export const logout = () => (dispatch) => {
  dispatch({type: LOGOUT});
  auth.cleanToken();
};
