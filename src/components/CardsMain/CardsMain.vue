<template>
  <section class="cards">
    <div class="cards-header">
      <custom-header tag="h2" size="32">
        {{ title }}
      </custom-header>
      <arrow-link-icon/>
    </div>
    <custom-grid tag="ul" columns="4">
      <product-card :list="list"/>
    </custom-grid>
  </section>
</template>

<script>
import photo from '../../assets/images/productCard.jpg'
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      list: [
        {name: 'Скальпель анал', price: '3 600 P', link: '/', image: photo},
        {name: 'Скальпель анал', price: '3 600 P', link: '/', image: photo},
        {name: 'Скальпель анал', price: '3 600 P', link: '/', image: photo},
        {name: 'Скальпель анал', price: '3 600 P', link: '/', image: photo},
      ]
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