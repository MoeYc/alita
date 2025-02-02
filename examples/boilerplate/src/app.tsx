import HomeGary from '@/assets/demoIcon/home.png';
import HomeBlue from '@/assets/demoIcon/home1.png';
import ListGary from '@/assets/demoIcon/list.png';
import ListBlue from '@/assets/demoIcon/list1.png';
import SetGary from '@/assets/demoIcon/setting.png';
import SetBlue from '@/assets/demoIcon/setting1.png';

export const request = {
  prefix: '/api',
  method: 'get',
  errorHandler: (error) => {
    // 集中处理错误
    console.log(11111111);
    console.log(error);
  },
};

const titleList = [
  {
    pagePath: '/',
    title: '首页',
  },
  {
    pagePath: '/users',
    title: '列表',
  },
  {
    pagePath: '/users/foo',
    title: '设置',
  },
];
const navList = [];
const navBar = {
  navList,
  fixed: false,
  onLeftClick: () => {
    // router.goBack();
  },
};
const tabList = [
  {
    pagePath: '/',
    text: '首页',
    iconPath: HomeGary,
    selectedIconPath: HomeBlue,
    title: '首页',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/users',
    text: '列表',
    iconPath: ListGary,
    selectedIconPath: ListBlue,
    title: '列表',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/users/foo',
    text: '设置',
    iconPath: SetGary,
    selectedIconPath: SetBlue,
    title: '设置',
    iconSize: '',
    badge: '',
  },
];

const tabBar = {
  color: `#999999`,
  selectedColor: '#00A0FF',
  borderStyle: 'white',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};
