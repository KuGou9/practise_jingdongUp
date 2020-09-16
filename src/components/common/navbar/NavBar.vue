<template>
  <div class="navbar">
    <div class="left">
      <slot name="navbar-left"></slot>
    </div>
    <div class="center">
      <slot name="navbar-center"></slot>
    </div>
    <div class="right">
      <slot name="navbar-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  components: {},
};
</script>

<style scoped>
.navbar {
  display: flex;
  font-size: 18px;
  height: 44px;
  line-height: 44px;
  left: 0;
  right: 0;
  top: 0;
  /* 设置过渡阴影 */
  box-shadow: 1px 2px 1px #f6f6f6;
  /* z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。 */
  z-index: 9;
  text-align: center;
}
.left,
.right {
  flex: 1;
}
.center {
  flex: 4;
}
</style>
