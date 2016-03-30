var mocks = {
  aboutTopic: '關於我們',
  newsTopic: '最新消息',
  productTopic: '產品型錄',
  storeTopic: '打印門市',
  priceTopic: '報價系統',
  memberTopic: '會員專區',
  aboutUs : [{
    path: '/aboutDubi',
    name: '關於都彼',
  },{
    path: '/CompanyTeam',
    name: '公司團隊',
  },{
    path: '/jobs',
    name: '各事業處',
  }],
  latestNews:[{
      path: '/aboutDubi',
      name: '公司新訊',
    },{
      path: '/CompanyTeam',
      name: '人員招募',
    },{
      path: '/jobs',
      name: '成功故事',
  }],
  products:[{
    path: '/aboutDubi',
    name: '產品介紹',
  },{
    path: '/CompanyTeam',
    name: '下載中心',
  }],
  stores:[{
    path: '/aboutDubi',
    name: '合作夥伴',
  },{
    path: '/CompanyTeam',
    name: '技術諮詢',
  },{
    path: '/jobs',
    name: '誠邀加盟',
  }],
  prices:[{
    path: '/aboutDubi',
    name: '線上報價',
  },{
    path: '/CompanyTeam',
    name: '自動化名片打印',
  }],
  members:[{
    path: '/aboutDubi',
    name: '對帳單查詢',
  },{
    path: '/CompanyTeam',
    name: '物流查詢',
  },{
    path: '/jobs',
    name: '退貨單打印',
  }]

};

export default function (state = mocks , action){
  switch (action.type) {
    default:
      return state ;
  }
};
