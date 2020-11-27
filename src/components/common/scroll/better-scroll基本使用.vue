<template>
  <div id="classify">
    <!-- 在better-scroll里面必须外层有一个wrapper，里面放置了一个元素content，content里面无论有多少个元素都无所谓。wrapper、content也只是一个名字，可以是其他的名字 -->
    <div class="wrapper">
      <ul class="content">
        <li>ab1</li>
        <li>ab2</li>
        <li>ab3</li>
        <li>ab4</li>
        <li>ab5</li>
        <li>ab6</li>
        <li>ab7</li>
        <li>ab8</li>
        <li>ab9</li>
        <li>ab10</li>
        <li>ab11</li>
        <li>ab12</li>
        <li>ab13</li>
        <li>ab14</li>
        <li>ab15</li>
        <li>ab16</li>
        <li>ab17</li>
        <li>ab18</li>
        <li>ab19</li>
        <li>ab20</li>
        <button class="btn">click me</button>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper);
    // 这个不饿放在created函数里面，因为当组件开始初始化的时候.wrapper取的是null、undefined
    // 默认情况下better-scroll不能监听滚动的位置，如果需要要传入参数
    let bscroll = new BScroll(wrapper, {
      // 可以直接过滤元素
      // let bscroll = new BScroll(document.querySelector(".wrapper"), {
      // 侦测位置
      // 0,1都是不侦测
      // 2代表手指滚动时侦测，当手指离开惯性滚动时不侦测
      probeType: 2,
      // 上拉刷新加载
      pullUpLoad: true,
    });
    // 监听滚动位置
    // bscroll.on("scroll", (position) => {
    //   console.log(position);
    // });
    document.querySelector(".btn").addEventListener("click", function () {
      console.log("----");
    });
    // 上拉刷新
    bscroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      // 发送网络请求

      setTimeout(() => {
        bscroll.finishPullUp();
      }, 1000);
    });
  },
};
</script>

<style scoped>
#classify {
  margin-bottom: 49px;
}
.wrapper {
  height: 100px;
  background-color: red;
  /* 为了让滚动条隐形 */
  overflow: hidden;
}
/* 使用原生滚动条。但是在移动端这种滚动效果非常不好 */
/* .content {
  height: 100px;
  overflow-y: scroll;
} */
</style>