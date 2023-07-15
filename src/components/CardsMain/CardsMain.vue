<template>
  <section class="cards">
    <div class="cards-header">
      <custom-header tag="h2" size="32">
        {{ title }}
      </custom-header>
      <arrow-link-icon/>
    </div>
    <custom-grid columns="4">

    </custom-grid>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
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
</style>