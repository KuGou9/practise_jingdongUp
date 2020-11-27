<template>
<!-- 登录选项 -->
  <div class="me-card" @click="login">
    <img src="@/assets/img/me_active.svg" alt="用户图片" />
    <div>点击登录</div>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
     let r= confirm('进入到登陆界面？')
     if(r){
      this.$router.push({path:'/login'});
     }
    }
  }
};
</script>

<style scoped>
.me-card {
  height: 100px;
  line-height: 100px;
  border: 1px solid gainsboro;
  vertical-align: center;
  display: flex;
  font-size: 18px;
  border-radius: 10px;
  margin: 0 8px;
  margin-top: 10px;
}
.me-card img {
  width: 50px;
  height: 50px;
  margin: 25px 10px;
}
</style>