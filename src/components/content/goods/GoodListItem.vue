 <template>
  <div class="good-list-item" @load="imageLoad" @click="itemClick">
    <a>
      <img :src="item.image" alt />
      <div class="good-item-info">
        <p>{{item.decr}}</p>
        <span class="price">￥{{item.price}}</span>
        <div class="shoucang">
          收藏:
          <span>{{item.shoucang}}</span>
        </div>
      </div>
    </a>
  </div>
</template>
 
 <script>
export default {
  name: "good-list-item",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 坚挺图片加载
    // 由于这一个组件会被复用到几个组件里面，所以事件要定义不同的事件
    imageLoad() {
      this.$bus.$emit("itemImageLoad");

      // // 主页home的图片加载
      // if (this.$route.path.indexOf("/home")) {
      //   this.$bus.$emit("homeItemImageLoad");
      // }

      // // 详情页的图片加载
      // if (this.$route.path.indexOf("/detail")) {
      //   this.$bus.$emit("detailItemImageLoad");
      // }
      console.log("监听图片加载");
    },

    // 监听商品点击
    itemClick() {
      // 携带id参数进行传递
      // this.$router.push("detail" + this.item.id);
      this.$router.push("/detail/" + this.item.price);
    },
  },
};
</script>
 
 <style  scoped>
a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
/* 让文字有地方可以显示 */
.good-list-item {
  width: 48%;
  height: 320px;
  position: relative;
  padding-top: 3px;
}
.good-list-item img {
  width: 100%;
  border-radius: 5px;
}
.good-item-info {
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.good-item-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 3px 0;
}
.good-item-info .price {
  color: var(--color-high-text);
  font-size: 18px;
  margin-left: 10px;
}
.good-item-info .shoucang {
  font-size: 14px;
  float: right;
  margin-right: 10px;
  /* background: url("assets/img/collect.png"); */
}
</style>