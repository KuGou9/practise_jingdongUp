<template>
  <div class="good-list">
    <good-list-item
      v-for="(item,index) in goods"
      :key="index"
      :item="item"
    ></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  name: "good-list",
  components: {
    "good-list-item": GoodListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>