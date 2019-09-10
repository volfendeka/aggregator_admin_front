import {
  REQUEST_SOURCES_PENDING,
  REQUEST_SOURCES_SUCCESS,
  REQUEST_SOURCES_FAILED,
  UPDATE_SOURCE_PENDING,
  UPDATE_SOURCE_SUCCESS,
  UPDATE_SOURCE_FAILED,
  CREATE_SOURCE_PENDING,
  CREATE_SOURCE_SUCCESS,
  CREATE_SOURCE_FAILED,
  REQUEST_COUNTRIES_PENDING,
  REQUEST_COUNTRIES_SUCCESS,
  REQUEST_COUNTRIES_FAILED,
  REQUEST_SOURCE_TYPES_PENDING,
  REQUEST_SOURCE_TYPES_SUCCESS,
  REQUEST_SOURCE_TYPES_FAILED,
  REQUEST_SOURCE_STATUSES_PENDING,
  REQUEST_SOURCE_STATUSES_SUCCESS,
  REQUEST_SOURCE_STATUSES_FAILED,

} from '../constants';
import {baseUrl} from '../configs/config';

export const requestSources = () => (dispatch) => {
  dispatch({type: REQUEST_SOURCES_PENDING});
  fetch(baseUrl + 'source')
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_SOURCES_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_SOURCES_FAILED, payload: error}));
};

export const createSource = (data) => (dispatch) => {
  dispatch({type: CREATE_SOURCE_PENDING});
  fetch(baseUrl + 'source', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response=> response.json())
    .then(data => dispatch({type: CREATE_SOURCE_SUCCESS, payload: data}))
    .catch(error => dispatch({type: CREATE_SOURCE_FAILED, payload: error}));
};

export const updateSource = (data, id) => (dispatch) => {
  console.log(JSON.stringify(data), id);

  dispatch({type: UPDATE_SOURCE_PENDING});
  fetch(baseUrl + 'source/' + id, {
    method: "PUT",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response=> response.json())
    .then(data => dispatch({type: UPDATE_SOURCE_SUCCESS, payload: data}))
    .catch(error => dispatch({type: UPDATE_SOURCE_FAILED, payload: error}));
};

export const requestCountries = () => (dispatch) => {
  dispatch({type: REQUEST_COUNTRIES_PENDING});
  fetch(baseUrl + 'country')
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_COUNTRIES_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_COUNTRIES_FAILED, payload: error}));
};

export const requestSourceTypes = () => (dispatch) => {
  dispatch({type: REQUEST_SOURCE_TYPES_PENDING});
  fetch(baseUrl + 'source/type')
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_SOURCE_TYPES_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_SOURCE_TYPES_FAILED, payload: error}));
};

export const requestSourceStatuses = () => (dispatch) => {
  dispatch({type: REQUEST_SOURCE_STATUSES_PENDING});
  fetch(baseUrl + 'source/status')
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_SOURCE_STATUSES_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_SOURCE_STATUSES_FAILED, payload: error}));
};
