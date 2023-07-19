<template>
  <li class="product-card" v-for="(item, index) in list" :key="index + Math.round(Math.random() * 1000)">
    <div class="product-card-image">
      <img :src="item.image" :alt="item.alt">
    </div>
    <div class="product-card-content">
      <custom-text style="margin-bottom: 15px;" size="14">
        {{ item.name }}
      </custom-text>
      <custom-text style="margin-bottom: 15px;" size="21">
        {{ item.price }}
      </custom-text>
      <custom-button>
        В корзину
      </custom-button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'product-card',
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style scoped>
.product-card-content {
  padding: 20px;
  border-top: 1px solid var(--black-0-3, rgba(51, 51, 51, 0.30));
}

.product-card-image {
  height: 200px;
  padding: 20px;
}

.product-card-image img {
  display: block;
  width: 100%;
  height: 100%;
}

.product-card {
  border-radius: 10px;
  max-width: 306px;
  width: 100%;
  border: 1px solid var(--black-0-3, rgba(51, 51, 51, 0.30));
}

@media (max-width: 1024px) {
  .product-card-image {
    height: auto;
  }
}
</style>