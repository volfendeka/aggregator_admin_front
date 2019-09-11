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
      'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
    },
    body: 'username='+data.username+'&password=' + data.password

  })
    .then(response=> response.json())
    .then(data => dispatch({type: LOGIN_SUCCESS, payload: data}))
    .catch(error => dispatch({type: LOGIN_FAILED, payload: error}));
};
