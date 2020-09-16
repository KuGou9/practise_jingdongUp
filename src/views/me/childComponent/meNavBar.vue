<template>
  <nav-bar class="nav-bar">
    <div slot="navbar-center">我的</div>
  </nav-bar>
</template>

<script>
import NavBar from "common/navbar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-high-text);
  color: white;
}
</style>