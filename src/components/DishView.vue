<template>
<div>
  <div v-if='dish' class='dish-view'>
    <img 
      class='dish-view_image' :src="`${URL}images/dish-imgs/${$route.params.dishType}/${dish.url}@2x.jpg`"
      :alt="dish.name">
    <div class='dish-info'>
      <span class='dish-name'>{{ dish.name }}</span>
      <div class='value-block'>
        <div class='dish-price'>{{ dish.price }} грн</div>
        <div class='dish-weight'>{{ dish.weight }} г</div>
      </div>
    </div>
    <p class='dish-view_desc'>
      <span class='contains_desc'>Склад:</span> {{ dish.desc }}
    </p>
    <div v-if="dish.extra">
      <h2>Додатки</h2>
      <div v-for='add in dish.extra' :key='add'>

      </div>
    </div>
  </div>
  <div v-else>
    <h1>No such dish</h1>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    dish() {
      return window.data[this.$route.params.dishType][this.$route.params.dish]
        ? window.data[this.$route.params.dishType][this.$route.params.dish]
        : undefined;
    }
  }
};
</script>

<style lang="scss" scoped>
  .dish-view {
    width: 90%;
    position: relative;
    margin: 20px auto;
    padding: 0.5em;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 10px;

    .dish-view_image {
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
    }

    .dish-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-top: 1em;

      .dish-name {
        flex: 1 0 50%;
        font-size: 1.2em;
        font-weight: bold;
      }

      .value-block {
        flex: 0 0 75px;
        text-align: center;
        font-weight: 600;
        .dish-price {
          border-bottom: 1px solid #373d3f;
        }
      }
    }

    .dish-view_desc {
      border-radius: 5px;
      margin-top: 2em;
    }

    .contains_desc {
      border-bottom: 1px solid #373d3f;
    }

    h2 {
      text-align: center;
      font-size: 1.2em;
    }
  }
</style>

