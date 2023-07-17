<template>
  <li class="category-card" v-for="(item, index) in list" :key="index">
    <router-link :to="item.link">
      <div class="category-card-image">
        <img :src="item.image" :alt="item.alt">
      </div>
    </router-link>
    <div class="category-card-content">
      <custom-header tag="h3" style="margin-bottom: 30px;" size="21">
        {{ item.name }}
      </custom-header>
    </div>
    <custom-button style="margin-top: auto">
      Посмотрить всё
    </custom-button>
  </li>
</template>

<script>
export default {
  name: 'category-card',
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style scoped>
.category-card-content {
  margin-top: 20px;
}

.category-card-image {
  height: 200px;
}

.category-card-image img {
  display: block;
  width: 100%;
  height: 100%;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid var(--black-0-3, rgba(51, 51, 51, 0.30));
  max-width: 306px;
}

@media (max-width: 1024px) {
  .category-card-image {
    height: auto;
  }
}
</style>