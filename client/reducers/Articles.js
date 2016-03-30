import {
  ARTICLES_FETCHED
} from '../actions/Articles.js';

var mocks = {
  slogan:'',
  joinContent:'',
  joinMore:'',
  lateNews:'',
  othersNews:'',
  newsDate:'',

  newsTopic:{
    contentLeft:'',
    contentRight:'',
  },

  introduce:{
    name:'',
    topic:'',
    content:'',
  },

};
export default function (state = mocks , action){
  switch (action.type) {
    case ARTICLES_FETCHED:
      return Object.assign({}, state, action.Articles);

    default:
      return state ;
  }
};
