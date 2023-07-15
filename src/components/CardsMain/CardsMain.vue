<template>
  <section class="cards">
    <div class="cards-header">
      <custom-header tag="h2" size="32">
        {{ title }}
      </custom-header>
      <arrow-link-icon/>
    </div>
    <custom-grid class="cards-grid-main" tag="ul" columns="4">
      <product-card :list="list"/>
    </custom-grid>
  </section>
</template>

<script>

// ADAPTIVE ADD!!!!!!
export default {
  props: {
    title: {
      type: String
    },
    list: {
      type: Array
    }
  },
}
</script>

<style scoped>
.cards-header {
  display: flex;
  align-items: center;
  margin-bottom: 90px;
}

.cards-header svg {
  margin-left: 25px;
}

@media (max-width: 1024px) {
  .cards-grid-main {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 576px) {
  .cards-grid-main {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>