var mocks = {
  onlineServe:{
    content:'線上客服',
    link:"",
  },
  join:{
    content: "+加入我們",
    link:"",
  },
  about:{
    content:'關於我們',
  },
  news:{
    content:'最新消息',
  },
  menus:{
    content:'產品型錄',
  },
  stores:{
    content:'打印門市',
  },
  members:{
    content:'會員專區',
  },
  prices:{
    content:'報價系統',
  },
};

export default function (state = mocks,action){
  switch (action.type) {

    default:
      return state ;
  }
};

/*case NEWS_LEFT:
  return Object.assign({},state,{
    newsTopic:'建立上海新線上服務系統',
    newsDate:'2016-01-02',
  });
  break;
case NEWS_RIGHT:
  return Object.assign({},state,{
    newsTopic:'世界博覽會指定合作廠商',
    newsDate:'2016-01-03',
  });
  break;
*/
