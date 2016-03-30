
import {
  FETCH_FOOTER_BUTTONS
} from '../actions/FooterButtons.js';


var mocks = {
  aboutTopic: '',
  newsTopic: '',
  productTopic: '',
  storeTopic: '',
  priceTopic: '',
  memberTopic: '',
  aboutUs : [],
  latestNews:[],
  products:[],
  stores:[],
  prices:[],
  members:[]
};

export default function (state = mocks , action){
  switch (action.type) {
    case FETCH_FOOTER_BUTTONS:
      return Object.assign({}, state, action.footButtons);
    default:
      return state ;
  }
};
