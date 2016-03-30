import {
  SOMENAMES_FETCHED
} from '../actions/SomeNames.js';

var mocks = {
  join:{
    content: '',
    link:'',
  },
};

export default function (state = mocks,action){
  switch (action.type) {
    case SOMENAMES_FETCHED:
      return Object.assign({}, state, action.SomeNames);
    default:
      return state ;
  }
};
