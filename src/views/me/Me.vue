<template>
  <div>
    <me-nav-bar></me-nav-bar>
    <me-card></me-card>
    <me-item :optionsArr="optionsArr"></me-item>
  </div>
</template>

<script>
import meCard from "./childComponent/meCard";
import meNavBar from "./childComponent/meNavBar";
import meItem from "./childComponent/meItem";
export default {
  data() {
    return {
      optionsArr: [
        "地址管理",
        "账户与安全",
        "设置字体大小",
        "支付设置",
        "赠票资质",
        "我的档案",
        "通用",
      ],
    };
  },
  components: {
    meCard,
    meNavBar,
    meItem,
  },
};
</script>

<style scoped>
</style>