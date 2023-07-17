<template>
  <section class="cards">
    <header-section style="margin-bottom: 90px;">
      {{ title }}
    </header-section>
    <custom-grid class="cards-grid-main" tag="ul" columns="4">
      <product-card :list="list"/>
    </custom-grid>
  </section>
</template>

<script>

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

@media (max-width: 1024px) {
  .cards-grid-main {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
  }
}

</style>