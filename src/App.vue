<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <h2>测试</h2>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";


export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
  @import "assets/css/base.css";
</style>
