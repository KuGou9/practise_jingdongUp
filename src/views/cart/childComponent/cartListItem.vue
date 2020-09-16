<template>
  <div class="cart-item">
    <div class="cart-select" @click="choose">
      <input type="checkbox" :checked="product.isChoose" />
    </div>
    <div class="cart-item-left">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="cart-item-right">
      <div class="cart-shop">
        <img src="@/assets/img/cart_shop.svg" alt />
        {{ product.shop }}
      </div>
      <div class="cart-decr">{{ product.decr }}</div>
      <div class="cart-bottom">
        <span class="cart-price">￥{{ product.price }}</span>
        <span class="cart-bottom-right">
          <button @click="increment">+</button>
          <span class="cart-count">{{ product.count }}</span>
          <button @click="decrement">-</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { INCREMENT, DECREMENT, CAL_CART_MONEY } from "@/store/names.js";

export default {
  data() {
    return {
      isChoose: false,
      //   item: {
      //     image:
      //       "https://s5.mogucdn.com/mlcdn/c45406/200627_1l6l0cjck9b7kj5gah9d2c5c2e2ak_3993x5999.jpg_400x534.v1cAC.40.webp",
      //     decr: "小个子七分裤休闲运动套装女夏季新款韩版大码时髦洋气三件套",
      //     price: "¥79",
      //     count: 1,
      //     shop: "随便一个店铺",
      //   },
    };
  },

  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    //     item: {
    //       type: Object,
    //       default() {
    //         return {};
    //       },
    //     },
  },
  methods: {
    increment() {
      this.$store.commit(INCREMENT);
    },
    decrement() {
      this.$store.commit(DECREMENT);
    },
    choose(btnChoose) {
      this.$store.commit("isChoose");
      this.$store.commit(CAL_CART_MONEY);
    },
  },
};
</script>

<style scoped>
.cart-item {
  height: 100px;
  display: flex;
  margin: auto 5px;
  margin-top: 10px;
  border: 1px solid #f6f6f6;
}
.cart-select {
  line-height: 100px;
}
.cart-item-left {
  flex: 1;
  vertical-align: center;
}
.cart-item-left img {
  width: 90px;
  height: 90px;
  margin: 5px 5px;
  border-radius: 5px;
}
.cart-item-right {
  flex: 3;
  margin-left: 10px;
}
.cart-shop {
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  display: flex;
}
.cart-shop img {
  width: 15px;
  height: 15px;
  margin: auto 3px;
}
.cart-decr {
  width: 210px;
  height: 25px;
  font-size: 14px;
  margin-top: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cart-bottom {
  line-height: 35px;
  font-size: 18px;
  color: black;
}
.cart-price {
  color: var(--color-high-text);
}
button {
  width: 20px;
  height: 20px;
  /* border-radius: 50%; */
  opacity: 0.5;
  vertical-align: center;
}
.cart-bottom-right {
  float: right;
  margin-right: 10px;
}
</style>
