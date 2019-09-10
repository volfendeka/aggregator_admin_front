import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../constants';
import {baseUrl} from '../configs/config';

export const login = (data) => (dispatch) => {
  console.log(data);
  dispatch({type: LOGIN_PENDING});
  fetch(baseUrl + 'login', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response=> response.json())
    .then(data => dispatch({type: LOGIN_SUCCESS, payload: data}))
    .catch(error => dispatch({type: LOGIN_FAILED, payload: error}));
};
