<template>
  <div class="tab-controll">
    <div
      v-for="(value, index) in title"
      :key="index"
      class="tab-controll-item"
      @click="itemClick(index)"
    >
      <span :class="{active: index === currentIndex}">{{value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-controll",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-controll {
  height: 40px;
  display: flex;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  /* 当top不是44px的时候是static定位，一旦符合条件就fixed。这个属性在移动端多数都是支持的，但是如果要想兼容浏览器的话那就不能乱用 */
  /* position: sticky;
  top: 44px; */
  /* 因为导航栏会变透明，所以设置一个bgc */
  background-color: #fff;
  /* 防止被后面的数据滑动时覆盖 */
  z-index: 9;
}
.active {
  color: var(--color-high-text);
  padding-bottom: 3px;
  border-bottom: 1px solid var(--color-tint);
}
.tab-controll-item {
  flex: 1;
}
</style>