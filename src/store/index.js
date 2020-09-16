import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import mutations from './mutations';
import getters from './getters';

const state = {
  cartList: [
    {
      image:
        'https://s5.mogucdn.com/mlcdn/c45406/200627_1l6l0cjck9b7kj5gah9d2c5c2e2ak_3993x5999.jpg_400x534.v1cAC.40.webp',
      decr: '小个子七分裤休闲运动套装女夏季新款韩版大码时髦洋气三件套',
      price: 79,
      count: 1,
      shop: '随便一个店铺',
      isChoose: false,
    },
  ],
  isSelect: true,
  money: 0,
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  getters,
  modules: {},
});
