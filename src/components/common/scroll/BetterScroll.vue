<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Vue from "vue";
export default {
  name: "better-scroll",
  data() {
    return {
      bscroll: null,
    };
  },
  props: {
    // 是否监听滚动
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 封装scrollTo方法，方便之后调用
    scrollTo(x, y, time = 300) {
      this.bscroll.scrollTo(x, y, time);
    },

    // refresh封装
    refresh() {
      this.bscroll.refresh();
    },

    finishPullUp() {
      this.bscroll.finishPullUp();
    },

    // 获取当前位时
    getPositionY() {
      return this.bscroll ? this.bscroll.y : 0;
    },
  },
  mounted() {
    // this指向的是当前的组件实例。
    this.$nextTick(() => {
      // 当前父组件渲染完成但是子组件还没有渲染完成所以高度计算错误。故而加一个延时
      setTimeout(() => {
        // 如果使用querySelector可能会因为有很多个class重名，无法保证准备拿到wrapper
        this.bscroll = new BScroll(this.$refs.wrapper, {
          click: true,
          // 上拉刷新加载
          pullUpLoad: this.pullUpLoad,
          // 解决无法使用鼠标滚动的问题
          mouseWheel: true,
          // 监听滚动
          probeType: this.probeType,
        });

        // 1. 监听滚动
        if (this.probeType === 2 || this.probeType === 3) {
          // console.log("scroll");
          this.bscroll.on("scroll", (position) => {
            this.$emit("scroll", position);
            // console.log(position);
          });
        }

        // 2. 监听上拉事件
        if (this.pullUpLoad) {
          this.bscroll.on("pullingUp", () => {
            console.log("上拉加载更多");
            // 请求网络数据
            this.$emit("pullUp");
            // //必须调用此方法才可以进行下次上拉,1.5秒可以拉取一次
            // setTimeout(() => {
            //   this.bscroll.finishPullUp();
            // }, 1500);
          });
        }
      }, 500);
    });
  },
};
</script>

<style scoped></style>
