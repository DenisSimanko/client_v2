<template>
  <div>
    <div class='app-nav'>
      <div class='logo-wrapper'>
        <!-- <img
          @click='$router.push("/")' 
          class='logo' :src='URL + "/images/logo.png"' alt="pizza365"
        >  -->
        <div class='logo' @click='$router.push("/")'>
          <span>Pizza 365</span>
        </div>
      </div>
      <icon-base class='header-icon'
        :width="34" :height="24" :clickHandler="openMenu">
        <bars v-if="!isMenuOpen"/>
        <cross v-else/>
      </icon-base>
      <icon-base class='header-icon'
        :width="34" :height="34" :clickHandler="openCart"
      >
        <ShopingCart></ShopingCart>
      </icon-base>
      <!-- <div class='contacts'>
        <span>(097) 212-21-02</span>
        <span>(097) 212-21-02</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import Bars from "./icons/Bars.vue";
import Cross from "./icons/Cross.vue";
import ShopingCart from "./icons/ShopingCart.vue";

export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    openCart() {
      window.alert('Cart was opened!');
    }
  },
  components: {
    IconBase,
    Bars,
    Cross,
    ShopingCart
  }
};
</script>

<style lang="scss" scoped>
$orange: rgb(237,125,77);
.app-nav {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  // border-bottom: 1px solid rgb(234, 234, 234);
  border-bottom: 1px solid rgba(100, 100, 100, 0.4);
  // line-height: 40px;
  padding: 3px 10px;
  width: 100%;
  height: 80px;
  background-color: rgba(255,255,255, 0.1);
  // background-color: ;

  .logo-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    
    .logo {
      text-align: center;
      position: relative;
      left: -50%;
      width: 130px;
      // color: #5D5D5D;
      color: #373D3F;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 28px;
    }
  }

  .header-icon {
    color: $orange;
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
