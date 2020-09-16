export default {
  // 获取购物车的商品列表
  getCartList(state) {
    return state.cartList;
  },
  // 2.获取总金额
  getMoney(state) {
    return state.money;
  },

  // 3.是否全选
  ifSelectAll(state) {
    // 判断是否有没选中的item
    let arr = state.cartList.filter((item) => item.isChoose != true);
    if (arr.length === 0) {
      return true;
    } else {
      return false;
    }
  },
};
