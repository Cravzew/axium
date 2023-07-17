<template>
  <div class="cards-header">
    <custom-header tag="h2" size="32">
      <slot></slot>
    </custom-header>
    <arrow-link-icon/>
  </div>
</template>

<script>
export default {
  name: 'header-section',
}
</script>

<style scoped>
.cards-header {
  display: flex;
  align-items: center;
}

.cards-header h2 {
  margin-right: 25px;
}
</style>