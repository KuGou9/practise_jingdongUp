import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  CAL_CART_MONEY,
} from '@/store/names.js';

export default {
  // 1.增加数量
  [INCREMENT](state) {
    // console.log(123);
    state.cartList[0].count++;
  },
  // 2.减少数量
  [DECREMENT](state) {
    if (state.cartList[0].count > 1) {
      state.cartList[0].count--;
    } else {
      alert('确定要删除商品吗？');
      state.cartList.pop();
    }
  },
  // 3.添加商品到购物车
  [ADD_TO_CART](state, product) {
    state.cartList.push(product);
  },

  // 4.更新选中的状态
  isChoose(state) {
    state.cartList[0].isChoose = state.isChoose;
    state.isChoose = !state.isChoose;
  },

  // 5.全选
  selectAll(state) {
    let arr = state.cartList.filter((item) => item.isChoose != true);
    console.log(arr);
    if (arr.length !== 0) {
      for (let i = 0; i < state.cartList.length; i++) {
        state.cartList[i].isChoose = true;
      }
    }
  },

  // 6.全不选
  notSelectAll(state) {
    let arr = state.cartList.filter((item) => item.isChoose != false);
    if (arr.length !== 0) {
      for (let i = 0; i < state.cartList.length; i++) {
        state.cartList[i].isChoose = false;
      }
    }
  },

  //   7.改变购物车的总金额
  [CAL_CART_MONEY](state) {
    state.money = 0;
    let list = state.cartList;
    for (let i = 0; i < list.length; i++) {
      if (list[i].isChoose) {
        state.money += list[i].count * list[i].price;
      }
    }
    console.log('state.money' + state.money);
  },
};
