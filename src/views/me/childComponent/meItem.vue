<template>
  <div>
    <div class="me-item" v-for="(value,index) in optionsArr" :key="index">
      <span class="item-text">{{value}}</span>
      <img src="@/assets/img/go.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    optionsArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.me-item {
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  margin: 0 8px;
  margin-top: 8px;
  border: 1px solid gainsboro;
  border-radius: 10px;
}
.item-text {
  margin-left: 8px;
}
.me-item img {
  width: 25px;
  height: 25px;
  margin: 10px 10px;
  float: right;
}
</style>