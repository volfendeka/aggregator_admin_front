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
} from '../constants';

const initialStateSearch = {
    searchField: '',
};
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};

const initialStateFeeds = {
  isPending: false,
  feeds: [],
  error: [],
};
export const requestFeeds = (state=initialStateFeeds, action={}) => {
  switch(action.type){
    case REQUEST_FEEDS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_FEEDS_SUCCESS:
      return Object.assign({}, state, { feeds: action.payload, isPending: false });
    case REQUEST_FEEDS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};


const initialStateSources = {
  isPending: false,
  feeds: [],
  error: [],
};
export const requestSources = (state=initialStateFeeds, action={}) => {
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
