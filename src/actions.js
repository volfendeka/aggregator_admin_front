import {
  CHANGE_SEARCH_FIELD,


} from './constants';
import {baseUrl} from './configs/config';

export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text
});
