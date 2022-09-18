<template>
  <div id="app">
    <!-- <home class="change"></home> -->
    <router-view></router-view>
  </div>
</template>

<style>
@import url("../src/assets/css/normalize.css");
#app {
  height: 100vw;
}
html,
body {
  padding: 0%;
  margin: 0;
}
</style>

<script>
import Home from "./views/home.vue";

export default {
  components: {
    Home,
  },
  data() {},
};
</script>