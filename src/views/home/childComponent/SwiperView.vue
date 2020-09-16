<template>
  <div class="swiper">
    <div v-for="(item,index) in banner" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper-view",
  data() {
    return {
      isSend: false,
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      // 因为轮播图并不只有一个图片。为了避免多次重复发动
      if (!this.isSend) {
        this.$emit("swiperImageLoad");
        this.isSend = true;
      }
    },
  },
};
</script>

<style scoped>
.swiper {
  height: 70px;
}

.swiper img {
  width: 100%;
}
</style>