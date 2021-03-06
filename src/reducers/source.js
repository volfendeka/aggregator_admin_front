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
  REQUEST_SOURCE_TYPES_PENDING,
  REQUEST_SOURCE_TYPES_SUCCESS,
  REQUEST_SOURCE_TYPES_FAILED,
  REQUEST_SOURCE_STATUSES_PENDING,
  REQUEST_SOURCE_STATUSES_SUCCESS,
  REQUEST_SOURCE_STATUSES_FAILED,
  REQUEST_SOURCE_STATS_PENDING,
  REQUEST_SOURCE_STATS_SUCCESS,
  REQUEST_SOURCE_STATS_FAILED,
} from '../constants';

const initialStateSources = {
  isPending: false,
  feeds: [],
  error: [],
};
export const requestSources = (state=initialStateSources, action={}) => {
  switch(action.type){
    case REQUEST_SOURCES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SOURCES_SUCCESS:
      return Object.assign({}, state, { sources: action.payload, isPending: false });
    case REQUEST_SOURCES_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateSourceTypes = {
  isPending: false,
  feeds: [],
  error: [],
};
export const requestSourceTypes = (state=initialStateSourceTypes, action={}) => {
  switch(action.type){
    case REQUEST_SOURCE_TYPES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SOURCE_TYPES_SUCCESS:
      return Object.assign({}, state, { sourceTypes: action.payload, isPending: false });
    case REQUEST_SOURCE_TYPES_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateSourceStatuses = {
  isPending: false,
  feeds: [],
  error: [],
};
export const requestSourceStatuses = (state=initialStateSourceStatuses, action={}) => {
  switch(action.type){
    case REQUEST_SOURCE_STATUSES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SOURCE_STATUSES_SUCCESS:
      return Object.assign({}, state, { sourceStatuses: action.payload, isPending: false });
    case REQUEST_SOURCE_STATUSES_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateCreateSource = {
  isPending: false,
  createdSource: [],
  error: [],
};
export const createSource = (state=initialStateCreateSource, action={}) => {
  switch(action.type){
    case CREATE_SOURCE_PENDING:
      return Object.assign({}, state, { isPending: true });
    case CREATE_SOURCE_SUCCESS:
      return Object.assign({}, state, { creatdSource: action.payload, isPending: false });
    case CREATE_SOURCE_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateUpdateSource = {
  isPending: false,
  updatedSource: [],
  error: [],
};
export const updateSource = (state=initialStateUpdateSource, action={}) => {
  switch(action.type){
    case UPDATE_SOURCE_PENDING:
      return Object.assign({}, state, { isPending: true });
    case UPDATE_SOURCE_SUCCESS:
      return Object.assign({}, state, { updatedSource: action.payload, isPending: false });
    case UPDATE_SOURCE_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateSourceStats = {
  isPending: false,
  sourceStats: [],
  error: [],
};
export const requestSourceStats = (state=initialStateSourceStats, action={}) => {
  switch(action.type){
    case REQUEST_SOURCE_STATS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SOURCE_STATS_SUCCESS:
      return Object.assign({}, state, { sourceStats: action.payload, isPending: false });
    case REQUEST_SOURCE_STATS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};
