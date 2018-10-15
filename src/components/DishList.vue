<template>
  <div>
    <div
       class='dish-block' 
       v-for='dish in fetchList' :key='dish.name'
    >
      <img 
        :src="`${URL}images/dish-imgs/${$route.params.dishType}/${dish.url}@2x.jpg`" 
        :alt="dish.name" class='dish-img' @click="$router.push(`${$route.path}/${dish.url}`)">
      <div v-if='dish.name'>
        <div class='first-row'>
          <span class='dish-name'>{{ dish.name }}</span>
          <span class='dish-price'>{{ dish.price }} грн</span>
        </div>
        <div class='dish-desc'>{{ dish.desc }}</div>
      </div>
      <div v-else>
        <div class='first-row'>
          <span class='dish-name'>{{ dish.title }}</span>
          <span class='dish-price'>{{ dish.price }} грн</span>
        </div>
        <div class='dish-short-desc'>{{ dish.smallTitle }}</div>
      </div>
      <div class='buttons-block'>
        <div class='btn'><span>Замовити</span></div>        
        <router-link class='btn dish-link' tag='div' :dish='dish' :to='$route.path + "/" + dish.url'><span>Детальнiше</span></router-link>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    fetchList() {
      return window.data[this.$route.params.dishType]
        ? window.data[this.$route.params.dishType]
        : [];
    }
  }
};
</script>

<style lang="scss">
.dish-block {
  width: 90%;
  margin: 20px auto;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5em;
  overflow: hidden;
  border-radius: 10px;

  .first-row {
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
    padding-bottom: 1em;
    font-weight: 600;
    font-size: 1.2em;

    .dish-name {
      flex: 1 1 70%;

    }
    .dish-price {
      flex: 0 0 90px;
      text-align: center;
    }
  }

  .dish-desc, .dish-short-desc {
    font-weight: 400;
  }

}

.dish-img {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.buttons-block {
  display: flex;
  justify-content: space-around;

  .btn {
    display: flex;
    margin-top: 1em;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    color: rgb(237,125,77);
    width: 100px;
    height: 2em;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0);
    border: 3px solid rgb(237,125,77);

    &:hover {
      color: #fff;
      background-color: rgb(237,125,77);
    }
  }
}
</style>
