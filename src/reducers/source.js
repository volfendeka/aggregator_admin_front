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
