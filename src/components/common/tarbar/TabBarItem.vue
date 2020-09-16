<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 在外围进行一层包装，是为了让在插槽替代的时候不会出现设定的属性被替换的情况，故而建议这样做 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 因为没办法直接将js里面的activeColor转换成css，所以动态绑定class没有意义，转而动态绑定style -->
    <!-- <div :class="{active:isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-bar-item",
  data() {
    return {
      // isActive: false,
      // path: "/me",
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "blue",
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      // 动态判断当前是哪一个组件处于活跃
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  /* 自动适应flex的多余空间 */
  flex: 1;
  /* 让图片文字居中 */
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  /* 让子元素置于父元素中间 */
  vertical-align: middle;
}
/* .active {
  color: red;
} */
</style>