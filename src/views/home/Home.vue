<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="navbar-center">购物街</div>
    </nav-bar>
    <!-- tab-controll这个是为了呈现吸顶效果 -->
    <tab-controll
      :title="title"
      @tabClick="tabClick"
      ref="tabcontroll1"
      :class="{'tabControllTop':isTabShow}"
    ></tab-controll>

    <!-- 因为在better-scroll组件里面的probeType使用了驼峰命名法，所以这里使用横杠。动态传入防止因为监听滚动的话会影响性能 -->
    <better-scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullUp="loadMore"
    >
      <swiper-view :banner="banner" @swiperImageLoad="swiperImageLoad"></swiper-view>
      <recommend-view :recommend="recommend"></recommend-view>
      <!-- 在better-scroll组件内部的话无论是否设置了click属性为true，都可以监听到button的click事件，但是其他的比如说div这类元素的点击就必须设置click为true才能监听到。像tab-controll这类div的元素点击就一定要设置属性之后才能实现 -->
      <tab-controll :title="title" @tabClick="tabClick" ref="tabcontroll2"></tab-controll>
      <good-list :goods="showImage" class="good-list"></good-list>
    </better-scroll>
    <!-- 组件的话是不能直接监听到click时间的，所以要加native -->
    <back-up @click.native="backTop" v-show="isShowBackUp" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";

import SwiperView from "./childComponent/SwiperView";
import RecommendView from "./childComponent/RecommendVew";

import NavBar from "components/common/navbar/NavBar";
import TabControll from "components/content/tabControll/TabControll";
import GoodList from "components/content/goods/GoodList";
import BetterScroll from "components/common/scroll/BetterScroll";
// import BackUp from "components/content/backup/BackUp";

import { debounce } from "commonjs/util.js";
import { itemImgListenerMixin, backUp } from "commonjs/mixin.js";

export default {
  name: "home",
  components: {
    "swiper-view": SwiperView,
    "recommend-view": RecommendView,
    NavBar,
    "tab-controll": TabControll,
    "good-list": GoodList,
    BetterScroll,
    // BackUp,
  },
  data() {
    return {
      // result: null,
      // result太过于臃肿，进行数据拆分
      // 轮播图数据
      banner: [
        {
          image:
            "https://s2.mogucdn.com/mlcdn/c45406/200901_4497bgdglj3bal7d457cg97587lg8_1060x367.jpg_800x9999.v1c7E.81.webp",
          link: "#",
        },
        // {
        //   image:
        //     "https://s2.mogucdn.com/mlcdn/c45406/200901_6252l34kf6cj02ihg9g1ha1ggk3lk_1060x367.png_800x9999.v1c7E.81.webp",
        //   link: "#",
        // },
        // {
        //   image:
        //     "https://s11.mogucdn.com/mlcdn/c45406/200902_0a6dfc79kll2b0a59bl568ed5h857_1060x367.png_800x9999.v1c7E.81.webp",
        //   link: "#",
        // },
        // {
        //   image:
        //     "https://s10.mogucdn.com/mlcdn/c45406/200831_0498b1h1f1e29fgac3ah113hfe82l_750x500.jpg",
        //   link: "#",
        // },
        // {
        //   image:
        //     "https://s17.mogucdn.com/mlcdn/c45406/200902_6g5k97h7gg7ak39k9i5248a4532il_1060x367.jpg_800x9999.v1c7E.81.webp",
        //   link: "#",
        // },
        // {
        //   image: "",
        //   link: "#",
        // },
      ],
      // 推荐商品
      recommend: [
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/200327_002kj992e0g2j5bcb24dj9d5dkdaj_135x135.jpg_640x640.v1cAC.40.webp",
          title: "上衣",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/200327_5ck3cb4a7kdf64d0f0j490hl683g7_135x135.jpg_640x640.v1cAC.40.webp",
          title: "套装",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/200327_6654ijhca6c05fbcc59ihji8a1ldj_135x135.jpg_640x640.v1cAC.40.webp",
          title: "裤子",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/200327_7jbccbi7dka9leb2a74292k90i0a7_135x135.jpg_640x640.v1cAC.40.webp",
          title: "裙子",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/190903_71ih092j1k9chh2bjdghh2jl054a4_150x150.jpg_640x640.v1cAC.40.webp",
          title: "女装",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/200901_8ghg6a5leh059ch88d3ccjd766bkg_135x135.jpg_640x640.v1cAC.40.webp",
          title: "美妆个护",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/200327_6654ijhca6c05fbcc59ihji8a1ldj_135x135.jpg_640x640.v1cAC.40.webp",
          title: "箱子",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/191021_118a8cl84d5b690bgacak880f68ga_135x135.jpg_640x640.v1cAC.40.webp",
          title: "家居",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/200303_2bc9g7kbl6a1c2901h3e500g6gb55_135x135.jpg_640x640.v1cAC.40.webp",
          title: "配饰",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/200831_14lg9ggae997aekfacf1e28c22la3_135x135.png_640x640.v1cAC.40.webp",
          title: "包包",
        },
      ],
      // 中间导航条
      title: ["流行", "新款", "特卖"],
      // 流行、新款、特卖的数据初始化
      goods: {
        pop: [
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200627_1l6l0cjck9b7kj5gah9d2c5c2e2ak_3993x5999.jpg_400x534.v1cAC.40.webp",
            decr: "小个子七分裤休闲运动套装女夏季新款韩版大码时髦洋气三件套",
            price: 79,
            shoucang: "761",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200624_4hbiial5ebbfadi7570066j74ccc5_5000x7500.jpg_400x534.v1cAC.40.webp",
            decr: "套装2020年新款女夏季宽松T恤开叉休闲裤减龄气质时尚两件套",
            price: 49.9,
            shoucang: "1185",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200618_8g4ggi1865id25lghf8g54a2g3h1g_3800x5700.jpg_400x534.v1cAC.40.webp",
            decr: "大码雾霾蓝连衣裙夏季v领气质高腰显瘦女神范森系桔梗裙中长款",
            price: 79,
            shoucang: "121",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200729_1g80a5g8be9h249dj2f1lh447ddbj_5000x7500.jpg_400x534.v1cAC.40.webp",
            decr: "超火cec卫衣女春秋韩版无帽薄款外套ins潮学生宽松上衣服",
            price: 39.9,
            shoucang: "204",
          },
        ],
        news: [
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200520_20764hjkl9d91ghcdj341ld07i97d_3999x5999.jpg_400x534.v1cAC.40.webp",
            decr: "小个子七分裤休闲运动套装女夏季新款韩版大码时髦洋气三件套",
            price: 79,
            shoucang: "761",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200711_70aa1kg42kbhdj5f21b3llba7b77e_5000x7500.jpg_400x534.v1cAC.40.webp",
            decr: "套装2020年新款女夏季宽松T恤开叉休闲裤减龄气质时尚两件套",
            price: 49.9,
            shoucang: "1185",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200310_711d1k5b0g3b66ekgad6k05f1eg1l_3999x5330.jpg_400x534.v1cAC.40.webp",
            decr: "大码雾霾蓝连衣裙夏季v领气质高腰显瘦女神范森系桔梗裙中长款",
            price: "¥79",
            shoucang: "121",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200227_81688g76bl18l43d1aclji99flc9f_5251x6999.jpg_400x534.v1cAC.40.webp",
            decr: "超火cec卫衣女春秋韩版无帽薄款外套ins潮学生宽松上衣服",
            price: 39.9,
            shoucang: "204",
          },
        ],
        sell: [
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200527_58549fa131b117b3b9l40l7i7ji0f_640x960.jpg_400x534.v1cAC.40.webp",
            decr: "小个子七分裤休闲运动套装女夏季新款韩版大码时髦洋气三件套",
            price: 79,
            shoucang: "761",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/55cf19/200723_0ia4g5lcg1k66k6c6f9g5g33iaci5_640x960.jpg_400x534.v1cAC.40.webp",
            decr: "套装2020年新款女夏季宽松T恤开叉休闲裤减龄气质时尚两件套",
            price: 49.9,
            shoucang: "1185",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/c45406/200828_15dcb877g7h6ji59h53f9hjkak4b1_3888x5832.jpg_400x534.v1cAC.40.webp",
            decr: "大码雾霾蓝连衣裙夏季v领气质高腰显瘦女神范森系桔梗裙中长款",
            price: 79,
            shoucang: "121",
          },
          {
            href: "#",
            image:
              "https://s5.mogucdn.com/mlcdn/55cf19/180414_6h27a6i46aga607143j99d4i82hhc_640x960.jpg_400x534.v1cAC.40.webp",
            decr: "牛仔半身裙夏季新款网纱拼接高腰韩版显瘦包臀裙子女夏短裙a字裙",
            price: 39.9,
            shoucang: "204",
          },
        ],
        // pop: { page: 0, list: [] },
        // new: { page: 0, list: [] },
        // sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackUp: false,
      isTabShow: false,
      tabOffsetTop: 0,
      saveY: 0,
      itemImageListener: null,
    };
  },
  /**使用计算属性对传过去的数组数据进行过滤 */
  computed: {
    showImage() {
      return this.goods[this.currentType];
    },
  },
  // 由于这个 生命周期函数比较特殊，那么我们只使用调用的方法，而不考虑具体的实现形式，故而在methods上再抽离一层
  // created() {
  //   // 1. 请求多个数据(异步操作)
  //   // request返回的是一个Promise，因为函数调用所以要将res这个局部变量进行保存
  //   // 函数调用的意思是当函数调用的时候，会将函数运行产生的所有东西都押入栈内，当函数执行结束将清空栈内所有数据
  //   // 因为接口问题所以就省略掉网络请求
  //   getHomeMultidata();

  //   // 2. 请求商品数据
  //   getHomeGoods(this.currentType);
  // },
  mixins: [itemImgListenerMixin, backUp],
  mounted() {
    // 使用防抖生成一个新函数
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    // 1. 监听图片加载完成
    this.itemImageListener = this.$bus.$on("homeItemImageLoad", () => {
      // 使用防抖函数
      refresh();
      // 不做防抖处理就会执行很多次
      // this.$refs.scroll.refresh();
    });
    console.log(123);
  },
  activated() {
    console.log("activated");
    if (this.saveY !== 0) {
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
    }
  },
  deactivated() {
    console.log("deactivated");
    // console.log(this.$refs.scroll.getPositionY());
    // 1. 保存Y值
    this.saveY = this.$refs.scroll.getPositionY();

    // 2. 取消事件全局监听
    this.$bus.$off("itemImageLoad", this.itemImageListener);
  },
  methods: {
    /**
     * 关于条件滚动的事件
     */
    // 1. 点击回到顶部
    backTop() {
      // 通过this.$refs.scroll获取到组件，然后访问组件里面的data里面的scroll对象再调用scrollTo方法。500毫秒代表在这个时间段内返回，这样就有一个返回的效果
      // this.$refs.scroll.scroll.scrollTo(0,0,500);
      // 上面的方法可以实现，但是代码难以理解，所以在better-scroll里面再封装一次
      this.$refs.scroll.scrollTo(0, 0, 500);
      // this.backUp.backClick();
    },

    // 2. 监听滚动的位置
    contentScroll(position) {
      // 当下滑位置大于300的时候显示backup按钮
      // this.isShowBackUp = -position.y > 300;
      // 因为使用了mixin，backup数据中的变量也通过this访问到
      this.isShowBackUp = -position.y > 300;

      // 2. 决定tabcontroll是否需要吸顶
      this.tabOffsetTop = -position.y;
      this.isTabShow = this.tabOffsetTop >= 388;
    },

    // 3. 上拉加载
    loadMore() {
      console.log("父组件开始实现上拉加载");
      // 但是这个会导致一个新的问题：当你图片上拉加载多了之后那么原本的计算出来的滚动高度就会导致之后的内容无法加载。所以需要调用refresh重新计算高度
      // getHomeGoods(this.currentType);
      // this.$refs.scroll.refresh();
      this.$refs.scroll.finishPullUp();
    },

    // 监听好轮播图的图片加载
    swiperImageLoad() {
      console.log("swiperImageLoad");
      console.log(this.$refs.tabcontroll2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabcontroll2.$el.offsetTop;
    },

    //  判断tabControll当前活跃，并传送对应数据
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          this.$refs.tabcontroll1.currentIndex = index;
          this.$refs.tabcontroll2.currentIndex = index;
          break;
        case 1:
          this.currentType = "news";
          this.$refs.tabcontroll1.currentIndex = index;
          this.$refs.tabcontroll2.currentIndex = index;
          break;
        case 2:
          this.currentType = "sell";
          this.$refs.tabcontroll1.currentIndex = index;
          this.$refs.tabcontroll2.currentIndex = index;
          break;
      }
    },

    /**
     * 以下是网络请求
     */
    // getHomeMultidata() {
    //   getHomeMultidata().then((res) => {
    //     // this.result = res;
    //     // 这里的层级关系要看具体请求到的数据
    //     this.banner = res.data.banner.list;
    //     this.recommend = res.data.recommend.list;
    //   });
    // },
    // // 请求三个分类的数据;
    // getHomeGoods(type) {
    //   //   // 取得这个数据对象的具体属性
    //   //   // 请求下一页的数据，下拉刷新的时候进行呈现
    //   const page = this.goods[type].page + 1;
    //   getHomeGoods(type, page).then((res) => {
    //     //     // 这里的层级关系要看具体请求到的数据
    //     //     // 这样会将原本的数据进行覆盖，之后如果想要显示那么就需要重新请求
    //     //     // this.goods[type].list = res.data.list;
    //     //     // 使用展开符将数据存入
    //     this.goods[type].list.push(...res.data.list);
    //     // 因为已经请求到了一页数据，所以页码+1
    //     this.goods[type].page += 1;

    //     // 完成上拉加载更新
    //     this.$refs.scroll.finishiPullUp();
    //   });
    // },
  },
};
</script>

<style scoped>
/* 预留出底部的tabbar */
#home {
  margin-bottom: 49px;
}
.navbar {
  position: fixed;
  background-color: rgb(78, 140, 238);
  color: white;
}
/* 两种方式 */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content { */
/* 100vh获取到整个可视化页面的高度，然后减去导航栏的高度 */
/* height: calc(100vh - 49px);
  overflow: hidden;
} */
.tabControllTop {
  position: relative;
  top: 44px;
}
</style>
