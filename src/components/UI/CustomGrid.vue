<template>
  <div :style="gridStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'custom-grid',
  props: {
    columns: {
      type: String,
      default: '3'
    }
  },
  data() {
    return {
      gridTemplateColumns: this.columns
    }
  },
  computed: {
    gridStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${this.columns}, 1fr)`
      }
    }
  }
}
</script>

<style >

</style>