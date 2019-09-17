import {
  REQUEST_SOURCE_STATS_PENDING,
  REQUEST_SOURCE_STATS_SUCCESS,
  REQUEST_SOURCE_STATS_FAILED,
  REQUEST_FEEDS_BY_SOURCE_PENDING,
  REQUEST_FEEDS_BY_SOURCE_SUCCESS,
  REQUEST_FEEDS_BY_SOURCE_FAILED,
  REQUEST_FEEDS_BY_DAY_PENDING,
  REQUEST_FEEDS_BY_DAY_SUCCESS,
  REQUEST_FEEDS_BY_DAY_FAILED,
  REQUEST_FEEDS_BY_SOURCE_DAY_PENDING,
  REQUEST_FEEDS_BY_SOURCE_DAY_SUCCESS,
  REQUEST_FEEDS_BY_SOURCE_DAY_FAILED,
  REQUEST_GENERAL_COUNTERS_PENDING,
  REQUEST_GENERAL_COUNTERS_SUCCESS,
  REQUEST_GENERAL_COUNTERS_FAILED,

} from '../constants';
import {baseUrl} from '../configs/config';
import api from "../service/api";

export const requestFeedsBySource = () => (dispatch) => {
  dispatch({type: REQUEST_FEEDS_BY_SOURCE_PENDING});
  fetch(baseUrl + 'stats/feeds_by_source', {
    headers: api.getAuthorizedJSONHeaders(),
  })
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_FEEDS_BY_SOURCE_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_FEEDS_BY_SOURCE_FAILED, payload: error}));
};

export const requestFeedsBySourceDay = () => (dispatch) => {
  dispatch({type: REQUEST_FEEDS_BY_SOURCE_DAY_PENDING});
  fetch(baseUrl + 'stats/feeds_by_source_day', {
    headers: api.getAuthorizedJSONHeaders(),
  })
    .then(response=> response.json())
    .then(data => {
      if(data.status && data.status !== 200){
        dispatch({type: REQUEST_FEEDS_BY_SOURCE_DAY_FAILED, payload: data});
        return;
      }
      dispatch({type: REQUEST_FEEDS_BY_SOURCE_DAY_SUCCESS, payload: data});
    })
    .catch(error => dispatch({type: REQUEST_FEEDS_BY_SOURCE_DAY_FAILED, payload: error}));
};

export const requestFeedsByDay = () => (dispatch) => {
  dispatch({type: REQUEST_FEEDS_BY_DAY_PENDING});
  fetch(baseUrl + 'stats/feeds_by_day', {
    headers: api.getAuthorizedJSONHeaders(),
  })
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_FEEDS_BY_DAY_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_FEEDS_BY_DAY_FAILED, payload: error}));
};

export const requestSourceStats = () => (dispatch) => {
  dispatch({type: REQUEST_SOURCE_STATS_PENDING});
  fetch(baseUrl + 'stats/sources' ,{
    headers: api.getAuthorizedJSONHeaders(),
  })
    .then(response=> response.json())
    .then(data => {
      if(data.status && data.status !== 200){
        dispatch({type: REQUEST_SOURCE_STATS_FAILED, payload: data});
        return;
      }
      dispatch({type: REQUEST_SOURCE_STATS_SUCCESS, payload: data});
    })
    .catch(error => dispatch({type: REQUEST_SOURCE_STATS_FAILED, payload: error}));
};

export const requestGeneralCounters = () => (dispatch) => {
  dispatch({type: REQUEST_GENERAL_COUNTERS_PENDING});
  fetch(baseUrl + 'stats/general_counters', {
    headers: api.getAuthorizedJSONHeaders(),
  })
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_GENERAL_COUNTERS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_GENERAL_COUNTERS_FAILED, payload: error}));
};

