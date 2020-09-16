<template>
  <tab-bar>
    <!-- 只是提供一个可以传入颜色的选项，也可以不传使用默认值 -->
    <tab-bar-item path="/home" activeColor="rgb(78, 140, 238)">
      <!-- 通过slot的name属性进行替换 -->
      <img src="../../../assets/img/home.png" slot="item-icon" alt />
      <img src="../../../assets/img/home_active.svg" slot="item-icon-active" alt />
      <div slot="item-text">home</div>
    </tab-bar-item>
    <tab-bar-item path="/classify" activeColor="rgb(78, 140, 238)">
      <img src="../../../assets/img/classify.png" slot="item-icon" alt />
      <img src="../../../assets/img/classify_active.svg" slot="item-icon-active" alt />
      <div slot="item-text">classify</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="rgb(78, 140, 238)">
      <img src="../../../assets/img/cart.png" slot="item-icon" alt />
      <img src="../../../assets/img/cart_active.svg" slot="item-icon-active" alt />
      <div slot="item-text">cart</div>
    </tab-bar-item>
    <tab-bar-item path="/me" activeColor="rgb(78, 140, 238)">
      <img src="../../../assets/img/me.png" slot="item-icon" alt />
      <img src="../../../assets/img/me_active.svg" slot="item-icon-active" alt />
      <div slot="item-text">me</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tarbar/TabBar";
// 引进组件，使用驼峰命名法
import TabBarItem from "components/common/tarbar/TabBarItem";
export default {
  name: "main-tab-bar",
  components: {
    "tab-bar": TabBar,
    //   注册组件
    "tab-bar-item": TabBarItem,
  },
};
</script>

<style  scoped>
</style>