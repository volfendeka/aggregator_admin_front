import {
  CHANGE_SEARCH_FIELD,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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

const initialStateAuthorization = {
  isPending: false,
  token: [],
  error: [],
};
export const authorization = (state=initialStateAuthorization, action={}) => {
  switch(action.type){
    case LOGIN_PENDING:
      return Object.assign({}, state, {isPending: true});
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {token: action.payload, isPending: false});
    case LOGIN_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false});
    default:
      return state;
  }
};
