<template>
  <div class='app'>
    <app-header></app-header>
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
export default {
  data() {
    return {};
  },
  components: {
    appHeader: Header,
    appMenu: Menu
  }
};
</script>

<style lang="scss">
$orange: rgb(237, 125, 77);
$border-color: #000;
body {
  margin: 0;
  color: #373d3f;
  // color: #1a1c1a;
}
</style>
