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
    },
    gap: {
      type: String,
      default: '24px'
    }
  },
  computed: {
    gridStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
        gap: `${this.gap}`
      }
    }
  }
}
</script>

<style>

</style>