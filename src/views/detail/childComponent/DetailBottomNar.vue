<template>
  <div class="detail-bottom-bar">
    <div class="bar-left">
      <img src="@/assets/img/shop.svg" alt="店铺" />
      <div class="bar-text">店铺</div>
    </div>
    <div class="bar-left">
      <img src="@/assets/img/kefu.svg" alt="客服" />
      <div class="bar-text">客服</div>
    </div>
    <div class="bar-left" @click="clickCart">
      <img src="@/assets/img/cart_active.svg" alt="购物车" />
      <div class="bar-text">购物车</div>
    </div>
    <div class="bar-right1" @click="addToCart(obj)">加入购物车</div>
    <div class="bar-right2">立即购买</div>
  </div>
</template>

<script>
import { ADD_TO_CART, CAL_CART_MONEY } from "@/store/names.js";
export default {
  data() {
    return {
      obj: {
        image:
          "https://s5.mogucdn.com/mlcdn/c45406/200627_1l6l0cjck9b7kj5gah9d2c5c2e2ak_3993x5999.jpg_400x534.v1cAC.40.webp",
        decr: "小个子七分裤休闲运动套装女夏季新款韩版大码时髦洋气三件套",
        price: 79,
        count: 1,
        shop: "随便一个店铺",
        isChoose: true,
      },
    };
  },
  methods: {
    // 点击购物车跳转到购物车界面
    clickCart() {
      this.$router.push("/cart");
    },

    // 将商品添加到购物车中
    addToCart(product) {
      this.$store.commit(ADD_TO_CART, product);
      this.$store.commit(CAL_CART_MONEY);
    },
  },
};
</script>

<style scoped>
.detail-bottom-bar {
  height: 54px;
  line-height: 18px;
  background-color: white;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  box-shadow: -1px -1px -1px #f6f6f6 0.1;
}
.detail-bottom-bar img {
  width: 25px;
  height: 25px;
  /* margin-bottom: 3px; */
  margin-top: 2px;
}
.bar-text {
  /* margin-top: 2px; */
  font-size: 14px;
  margin: auto 0;
}
.bar-left {
  flex: 1.25;
  border: 1px solid #f4f4f4;
}
.bar-right1,
.bar-right2 {
  flex: 2.5;
  line-height: 54px;
  font-size: 18px;
}
.bar-right1 {
  background-color: rgb(78, 140, 238);
}
.bar-right2 {
  background-color: rgb(78, 68, 258);
}
</style>