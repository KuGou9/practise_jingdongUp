<template>
  <div>
    <detail-nav-bar @navbarClick="navbarClick"></detail-nav-bar>
    <!-- 详情页面
    {{id}}-->
    <scroll class="content" ref="detailScroll">
      <div>
        <ul>
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
          <li>ab21</li>
          <li>ab22</li>
          <li>ab23</li>
          <li>ab24</li>
          <li>ab25</li>
          <li>ab26</li>
          <li>ab27</li>
          <li>ab28</li>
          <li>ab29</li>
          <li>ab30</li>
          <li>ab31</li>
          <li>ab32</li>
          <li>ab33</li>
          <li>ab34</li>
          <li>ab35</li>
          <li>ab36</li>
          <li>ab37</li>
          <li>ab38</li>
          <li>ab39</li>
          <li>ab40</li>
          <li>ab41</li>
          <li>ab42</li>
          <li>ab43</li>
          <li>ab44</li>
          <li>ab45</li>
          <li>ab46</li>
          <li>ab47</li>
          <li>ab48</li>
          <li>ab49</li>
          <li>ab50</li>
          <li>ab51</li>
          <li>ab52</li>
          <li>ab53</li>
          <li>ab54</li>
          <li>ab55</li>
          <li>ab56</li>
          <li>ab57</li>
          <li>ab58</li>
          <li>ab59</li>
          <li>ab60</li>
          <li>ab61</li>
          <li>ab62</li>
          <li>ab63</li>
          <li>ab64</li>
          <li>ab65</li>
          <li>ab66</li>
          <li>ab67</li>
          <li>ab68</li>
          <li>ab69</li>
          <li>ab70</li>
          <li>ab71</li>
          <li>ab72</li>
          <li>ab73</li>
          <li>ab74</li>
          <li>ab75</li>
          <li>ab76</li>
          <li>ab77</li>
          <li>ab78</li>
          <li>ab79</li>
          <li>ab80</li>
          <li>ab81</li>
          <li>ab82</li>
          <li>ab83</li>
          <li>ab84</li>
          <li>ab85</li>
          <li>ab86</li>
          <li>ab87</li>
          <li>ab88</li>
          <li>ab89</li>
          <li>ab90</li>
          <li>ab91</li>
          <li>ab92</li>
          <li>ab93</li>
          <li>ab94</li>
          <li>ab95</li>
          <li>ab96</li>
          <li>ab97</li>
          <li>ab98</li>
          <li>ab99</li>
          <li>ab100</li>
        </ul>
      </div>
    </scroll>
    <detail-bottom-bar class="tab-bar"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComponent/DetailNavBar";
import Scroll from "common/scroll/BetterScroll.vue";

// 子组件
import DetailBottomBar from "./childComponent/DetailBottomNar";

import { getDetailData } from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      topY: [0, 1000, 2000, 300],
    };
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailBottomBar,
  },
  methods: {
    navbarClick(index) {
      this.$refs.detailScroll.scrollTo(0, -this.topY[index]);
    },
  },
  created() {
    // console.log(this.$route.params);
    // 获取参数
    this.id = this.$route.params.id;

    // getDetailData(this.id);

    // 进行数据分类

    // 监听图片（通过事件总线的传递）加载完成之后

    // 通过封装的函数positionY进行y值的获取
  },
};
</script>

<style scoped>
/* 滚动条 */
.content {
  top: 44px;
  bottom: 54px;
  overflow: hidden;
  position: absolute;
}
.tab-bar {
  z-index: 10;
}
</style>