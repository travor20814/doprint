import {
  TOPIC_BUTTONS_FETCHED,
} from '../actions/TopicButtons.js';

export default function (state = [], action){
  switch (action.type) {
    case TOPIC_BUTTONS_FETCHED:
      return action.buttons;

    default:
      return state;
  }
};
