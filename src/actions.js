import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FEEDS_PENDING,
  REQUEST_FEEDS_SUCCESS,
  REQUEST_FEEDS_FAILED,
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

} from './constants';
import {baseUrl} from './configs/config';

export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text
});

export const requestFeeds = () => (dispatch) => {
  dispatch({type: REQUEST_FEEDS_PENDING});
  fetch(baseUrl + 'feed/get/all')
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_FEEDS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_FEEDS_FAILED, payload: error}));
};

export const requestSources = () => (dispatch) => {
  dispatch({type: REQUEST_SOURCES_PENDING});
  fetch(baseUrl + 'source')
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_SOURCES_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_SOURCES_FAILED, payload: error}));
};

export const createSource = (data) => (dispatch) => {
  dispatch({type: CREATE_SOURCE_PENDING});
  fetch(baseUrl + 'source/' + data.id, {
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

export const updateSource = (data) => (dispatch) => {
  dispatch({type: UPDATE_SOURCE_PENDING});
  fetch(baseUrl + 'source/' + data.id, {
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
