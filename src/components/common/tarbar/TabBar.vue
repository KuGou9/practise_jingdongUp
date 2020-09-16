<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // 使用name属性作为之后引入组件的标签名
  name: "tab-bar",
  components: {},
};
</script>

<style coped>
#tab-bar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  /* 设置字体大小 */
  font-size: 16px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 设置过渡阴影 */
  box-shadow: -1px -1px 1px #f5f5f5;
}
</style>
