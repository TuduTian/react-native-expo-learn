


const router = [
  {
    name: 'index', // 跳转路径
    title: '小说', // 头部展示标题
    component: require('./ButtonNav').default,
  },
  //下面只需要配置非tabbar页面路径
  {
    name:'camera',
    title:'相机',
    component: require('../demo/camera').default,
  },
  {
    name:'photo',
    title:'相册demo',
    component: require('../demo/photo/index').default,
  },
  {
    name:'wechat',
    title:'微信',
    component: require('../demo/wechat/index').default,
  },
];
export default router;