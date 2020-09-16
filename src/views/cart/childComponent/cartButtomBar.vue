<template>
  <div class="buttom-bar">
    <span class="buttom-bar-left" @click="selectAll">
      <input type="checkbox" :checked="ifSelectAll" />全选
    </span>
    <span>总计：￥{{getMoney}}</span>
    <span></span>
    <span class="btn">结算</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { CAL_CART_MONEY } from "@/store/names";
export default {
  data() {
    return {
      price: 123,
      isSelectAll: false,
      cartList: this.$store.getters.getCartList,
    };
  },
  computed: {
    ...mapGetters(["getMoney", "ifSelectAll"]),
    // 2.计算购物车商品列表的总金额
  },
  methods: {
    selectAll() {
      if (!this.isSelectAll) {
        this.$store.commit("selectAll");
        this.isSelectAll = true;
      } else {
        this.$store.commit("notSelectAll");
        this.isSelectAll = false;
      }
      this.$store.commit(CAL_CART_MONEY);
    },
  },
};
</script>

<style scoped>
.buttom-bar {
  height: 45px;
  line-height: 45px;
  bottom: 49px;
  left: 0;
  right: 0;
  position: fixed;
  font-size: 18px;
  background-color: #f1f1f5;
}
.btn {
  width: 80px;
  text-align: center;
  /* line-height: 45px; */
  float: right;
  background-color: powderblue;
}
.buttom-bar-left {
  margin-right: 30px;
}
</style>