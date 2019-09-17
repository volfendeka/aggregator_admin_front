import {
  REQUEST_FEEDS_PENDING,
  REQUEST_FEEDS_SUCCESS,
  REQUEST_FEEDS_FAILED,
  START_FEED_RUNNER,
  START_FEED_RUNNER_SUCCESS,
  START_FEED_RUNNER_FAILED,
  STOP_FEED_RUNNER,
  STOP_FEED_RUNNER_SUCCESS,
  STOP_FEED_RUNNER_FAILED,

} from '../constants';
import {baseUrl} from '../configs/config';
import api from "../service/api";

export const requestFeeds = (limit) => (dispatch) => {
  dispatch({type: REQUEST_FEEDS_PENDING});
  fetch(baseUrl + 'feed/' + limit, {
    headers: api.getAuthorizedJSONHeaders()
  })
    .then(response=> response.json())
    .then(data => {
      if(data.status && data.status !== 200){
        dispatch({type: REQUEST_FEEDS_FAILED, payload: data});
        return;
      }
      dispatch({type: REQUEST_FEEDS_SUCCESS, payload: data});
    })
    .catch(error => dispatch({type: REQUEST_FEEDS_FAILED, payload: error}));
};

export const startFeedRunner = () => (dispatch) => {
  dispatch({type: START_FEED_RUNNER});
  fetch(baseUrl + 'feed/runner/start', {
    headers: api.getAuthorizedJSONHeaders()
  })
    .then(response => response.json())
    .then(data => dispatch({type: START_FEED_RUNNER_SUCCESS, payload: data}))
    .catch(error => dispatch({type: START_FEED_RUNNER_FAILED, payload: error}));
};

export const stopFeedRunner = () => (dispatch) => {
  dispatch({type: STOP_FEED_RUNNER});
  fetch(baseUrl + 'feed/runner/stop', {
    headers: api.getAuthorizedJSONHeaders()
  })
    .then(response => response.json())
    .then(data => dispatch({type: STOP_FEED_RUNNER_SUCCESS, payload: data}))
    .catch(error => dispatch({type: STOP_FEED_RUNNER_FAILED, payload: error}));
};

