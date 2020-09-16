<template>
  <div class="cart-list">
    <cart-list-item v-for="(item ,index) in getCartList" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cartListItem from "./cartListItem";
export default {
  components: {
    cartListItem,
  },
  computed: {
    ...mapGetters(["getCartList"]),
  },
};
</script>

<style scoped>
.cart-list {
  width: 100%;
  left: 0;
  right: 0;
}
</style>