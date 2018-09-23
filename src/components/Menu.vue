<template>
<div class='menu'>
  <router-link 
    class='menu-link' v-for='(dish) in menuList' :key='dish.name'
    :to='dish.path' tag='img'
    :src='URL + dish.imgPath'
  >
  </router-link>
</div>  
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: "Pizza",
          imgPath: '/images/menu-imgs/mini-photo/sushi.png',
          path: "/pizza"
        },
        {
          name: "Burgers",
          imgPath: '/images/menu-imgs/mini-photo/burgers.png',
          path: "/burgers"
        },
        {
          name: "Salads",
          imgPath: '/images/menu-imgs/mini-photo/salads.png',
          path: "/salads"
        },
        {
          name: "Drinks",
          imgPath: '/images/menu-imgs/mini-photo/wok.png',
          path: "/drinks"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$menu-height: 70px;
.menu {
  display: flex;
  // width: 100%;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: rgba(255,255,255, 0.6);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

  .menu-link {
    display: block;
    align-items: center;
    justify-content: center;
    // flex: 0 0 80px;
    width: 70px;
    height: 70px;
    border-radius: 20%;
    // background-color: #2cd5c4;
    color: white;
    overflow: hidden;
  }
}
</style>
