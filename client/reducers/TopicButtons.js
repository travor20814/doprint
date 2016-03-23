
export default function (state =[{
  path: '/about',
  name: '關於我們',
}, {
  path: '/news',
  name: '最新消息',
}, {
  path: '/products',
  name: '產品型錄',
},{
  path: '/stores',
  name: '印刷門市',
},{
  path: '/prices',
  name: '報價系統',
},{
  path: '/members',
  name: '會員專區',
}],action){
  switch (action.type) {
    default:
      return state ;
  }
};
