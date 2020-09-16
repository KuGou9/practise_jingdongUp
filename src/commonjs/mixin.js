import { debounce } from 'commonjs/util.js';

import BackUp from 'content/backup/BackUp.vue';

/**
 * 抽取组件中的公共代码（混入）
 * 监听GoodsListItem中的图片是否加载完成
 * @type {{mounted(): void}}
 */
export const itemImgListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      //保存防抖过得刷新函数，可以在其他地方调用
      mixinRefresh: null,
    };
  },
  mounted() {
    //1、监听GoodsListItem中的图片是否加载完成(使用自己封装的防抖函数控制执行次数)
    this.mixinRefresh = debounce(this.$refs.scroll.refresh, 50);

    this.itemImgListener = () => {
      //refresh():重新计算 better-scroll,   this.$refs.scroll：组件创建完成才能执行后面函数
      this.mixinRefresh();
    };
    this.$bus.$on('itemImageLoad', this.itemImgListener);
    console.log('mixin');
  },
};

export const backUp = {
  data() {
    return {
      //是否显示回到顶部按钮
      isShowBackUp: false,
    };
  },
  components: {
    BackUp,
  },
  methods: {
    // 点击回到顶部
    backClick() {
      // 通过this.$refs.scroll获取到组件，然后访问组件里面的data里面的scroll对象再调用scrollTO方法。500毫秒代表在这个时间段内返回，这样就有一个返回的效果
      // this.$refs.scroll.scroll.scrollTo(0,0,500);
      // 上面的方法可以实现，但是代码难以理解，所以在better-scroll里面再封装一次
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
};
