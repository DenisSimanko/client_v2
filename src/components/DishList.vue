<template>
  <div>
    <div
       class='dish-block' 
       v-for='dish in fetchList' :key='dish.name'
    >
      <img :src="URL + dish.img" :alt="dish.name" class='dish-img'>
      <div class='first-row'>
        <span class='dish-name'>{{ dish.name }}</span>
        <span class='dish-price'>139 UAH</span>
      </div>
      <div class='dish-short-desc'>Welcome to StackOverflow! We will be glad to help you if you get stuck on a specific</div>
      <div style='text-align: right'>
        <router-link class='dish-link' tag='span' :dish='dish' :to='$route.path + "/" +dish.url' replace>More</router-link>
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
        ? window.data[this.$route.params.dishType] : [] 
    },
  }
};
</script>

<style lang="scss" scoped>
.dish-block {
  width: 90%;
  margin: 20px auto;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  padding: 0.5em;

  .first-row {
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
    padding-bottom: 1em;
    font-weight: bold;
    font-size: 1.2em;
  }

  .dish-link {
    display: inline-block;
    margin-right: 20px;
    padding: 2px 5px;
    background-color: darkgreen;
    border-radius: 20%;
    color: white;
  }

}

.dish-img {
  width: 100%;
}
</style>
