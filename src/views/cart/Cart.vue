<template>
  <div>
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll>
      <cart-list></cart-list>
    </scroll>
    <buttom-bar></buttom-bar>
  </div>
</template>

<script>
import scroll from "common/scroll/BetterScroll.vue";

// 子组件
import detailNavBar from "./childComponent/cartNavBar";
import cartList from "./childComponent/cartList";
import buttomBar from "./childComponent/cartButtomBar";

export default {
  components: {
    scroll,
    detailNavBar,
    cartList,
    buttomBar,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: rgb(78, 168, 238);
  color: white;
}
</style>