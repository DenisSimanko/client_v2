<template>
  <div>
    <svg v-if='clickHandler'
      xmlns="http://www.w3.org/2000/svg" 
      :width="width" 
      :height="height" 
      :aria-labelledby="iconName"
      @click="clickHandler" 
      role="img"
    >
      <!-- viewBox="0 0 18 18"  -->
      <title :id="iconName" lang="en">{{iconName}} icon</title>
      <g :fill="iconColor">
        <slot />
      </g>
    </svg>
    <svg v-else
      xmlns="http://www.w3.org/2000/svg" 
      :width="width" 
      :height="height" 
      :aria-labelledby="iconName"
      role="img"
    >
      <!-- viewBox="0 0 18 18"  -->
      <title :id="iconName" lang="en">{{iconName}} icon</title>
      <g :fill="iconColor">
        <slot />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'unknown icon'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    clickHandler: {
      type: Function,
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>