<template>
  <div>
    <div class='app-nav'>
      <div class='menu-btn'>
        <icon-base 
          :click-handler="openMenu"
          :width="30">
          <bars v-if="!isMenuOpen"/>
          <cross v-else/>
        </icon-base>
      </div>

      <img
        @click='$router.push("/")' 
        class='logo' :src='URL + "/images/logo.png"' alt="pizza365">
      <div class='contacts'>
        <span>(097) 212-21-02</span>
        <span>(097) 212-21-02</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import Bars from "./icons/Bars.vue";
import Cross from "./icons/Cross.vue";

export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  components: {
    IconBase,
    Bars,
    Cross
  }
};
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  line-height: 40px;
  padding: 3px 10px;
  width: 100%;
  height: 80px;
  background-color: #fff;

  .logo {
    width: 130px;
  }
  .logo,
  .menu-btn,
  .contacts {
    flex: 0 1 30%;
  }
  
  .contacts {
    text-align: right;
    font-size: 10px;
    
    span {
      margin: 1em;
      font-weight: bold;
      display: block;
      line-height: 10px;
    }
  }

  .menu-btn {
    text-align: left;
  }

}
</style>
