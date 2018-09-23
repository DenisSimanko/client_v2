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
$border-color: #000;
body {
  margin: 0;
}
</style>
