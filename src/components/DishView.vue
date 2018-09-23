<template>
<div>
  <div v-if='dish' class='dish-view'>
    <img 
      class='dish-view_image' :src="URL + dish.img" :alt="dish.name">
    <!-- <p class='dish-view_desc'>
      {{ dish.desc }}
    </p> -->
    <div class='dish-info'>
      <span class='dish-name'>{{ dish.name }}</span>
      <div class='value-block'>
        <div class='dish-price'>139 UAH</div>
        <div class='dish-weight'>300g</div>
      </div>
    </div>
    <p class='dish-view_desc'>
      Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров 
    </p>
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
div {
  width: 100%;
  position: relative;
  box-sizing: border-box;

  .dish-view {
    width: 100%;
    position: relative;
    padding: 15px;

    .dish-view_image {
      border-radius: 5px;
      width: 100%;
      margin: 10px auto;
      display: block;
    }

    .dish-info {
      display: flex;
      justify-content: space-between;
      position: relative;

      .dish-name {
        flex: 1 0 50%;
        font-size: 2em;
        font-weight: bold;
      }

      .value-block {
        flex: 0 0 75px;
        text-align: center;
        font-weight: 600;
        .dish-price {
          border-bottom: 2px solid black;
        }

      }

    }

    .dish-view_desc {
      border-radius: 5px;
      margin-top: 2em;
    }
  }
}
</style>

