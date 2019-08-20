import {
    REQUEST_FEEDS_PENDING,
    REQUEST_FEEDS_SUCCESS,
    REQUEST_FEEDS_FAILED,
} from '../constants';

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

