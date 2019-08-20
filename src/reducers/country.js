import {
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_FAILED,
} from '../constants';

const initialStateCountries = {
  isPending: false,
  countries: [],
  error: [],
};
export const requestCountries = (state=initialStateCountries, action={}) => {
  switch(action.type){
    case REQUEST_COUNTRIES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_COUNTRIES_SUCCESS:
      return Object.assign({}, state, { countries: action.payload, isPending: false });
    case REQUEST_COUNTRIES_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

