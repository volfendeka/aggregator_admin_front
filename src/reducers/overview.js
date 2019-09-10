import {

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


const initialStateGeneralCounters = {
  isPending: false,
  generalCounters: [],
  error: [],
};
export const requestGeneralCounters = (state=initialStateGeneralCounters, action={}) => {
  switch(action.type){
    case REQUEST_GENERAL_COUNTERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_GENERAL_COUNTERS_SUCCESS:
      return Object.assign({}, state, { generalCounters: action.payload, isPending: false });
    case REQUEST_GENERAL_COUNTERS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateFeedsBySource = {
  isPending: false,
  feedsBySource: [],
  error: [],
};
export const requestFeedsBySource = (state=initialStateFeedsBySource, action={}) => {
  switch(action.type){
    case REQUEST_FEEDS_BY_SOURCE_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_FEEDS_BY_SOURCE_SUCCESS:
      return Object.assign({}, state, { feedsBySource: action.payload, isPending: false });
    case REQUEST_FEEDS_BY_SOURCE_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateFeedsByDay = {
  isPending: false,
  feedsByDay: [],
  error: [],
};
export const requestFeedsByDay = (state=initialStateFeedsByDay, action={}) => {
  switch(action.type){
    case REQUEST_FEEDS_BY_DAY_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_FEEDS_BY_DAY_SUCCESS:
      return Object.assign({}, state, { feedsByDay: action.payload, isPending: false });
    case REQUEST_FEEDS_BY_DAY_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateFeedsBySourceDay = {
  isPending: false,
  feedsBySourceDay: [],
  error: [],
};
export const requestFeedsBySourceDay = (state=initialStateFeedsBySourceDay, action={}) => {
  switch(action.type){
    case REQUEST_FEEDS_BY_SOURCE_DAY_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_FEEDS_BY_SOURCE_DAY_SUCCESS:
      return Object.assign({}, state, { feedsBySourceDay: action.payload, isPending: false });
    case REQUEST_FEEDS_BY_SOURCE_DAY_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};
