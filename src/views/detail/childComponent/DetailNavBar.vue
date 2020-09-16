<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="navbar-left" class="navbar-left" @click="backClick">
        <img src="@/assets/img/back.svg" alt="返回" />
      </div>
      <div slot="navbar-center" class="navbar-center">
        <div
          v-for="(value, index) in title"
          :key="index"
          class="title-item"
          @click="itemClick(index)"
        >
          <span :class="{active:currentIndex===index}">{{value}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar.vue";

export default {
  data() {
    return {
      id: null,
      title: ["商品", "评论", "详情", "其他"],
      currentIndex: 0,
      navbarTopY: [],
    };
  },
  methods: {
    //   1. 返回按钮点击事件
    backClick() {
      this.$router.go(-1);
    },
    //   2. 点击导航栏
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("navbarClick", index);
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style  scoped>
.detail-nav-bar {
  background-color: white;
  color: black;
  text-align: center;
  box-shadow: 1px 1px 1px #f6f6f6 0.1;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
}
.navbar-left img {
  width: 20px;
  margin: 14px 14px;
}
.navbar-center {
  display: flex;
  flex: 1;
}
.title-item {
  flex: 1;
}
.active {
  padding-bottom: 3px;
  border-bottom: 1.5px solid var(--color-high-text);
}
</style>