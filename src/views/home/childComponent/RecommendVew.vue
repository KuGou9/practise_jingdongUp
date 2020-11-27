<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend-view",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  /* height: 50px; */
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  text-align: center;
  background-color: white;
  border-bottom: 1px solid #d6d5d5;
  padding-bottom: 5px;
}
.recommend img {
  width: 50px;
}
.recommend-item {
  flex: 1 1 20%;
  padding: 5px 0;
}
</style>