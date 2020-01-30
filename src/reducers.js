import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
  searchString : ''
};

export const searchRobo = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({},state, {'searchString' : action.payload});
    default:
      return state;
  }
};