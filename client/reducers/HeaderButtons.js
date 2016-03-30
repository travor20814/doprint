import {
  HEADER_BUTTONS_FETCHED
} from '../actions/HeaderButtons.js';

export default function (state = [], action){
  switch (action.type) {
    case HEADER_BUTTONS_FETCHED:
      return action.HeaderButtons;
    default:
      return state ;
  }
};
