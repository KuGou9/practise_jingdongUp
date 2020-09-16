import { request } from './request';

// 首页所有数据的网络请求都保存在这个文件

// 请求轮播图、推荐商品
export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  });
}

// 请求三个导航栏的不同数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/goods',
    // 对象字面量简写方法
    params: {
      type,
      page,
    },
  });
}
