<template>
  <li class="category-card" :style="`background-color: ${color}`">
    <router-link :to="link">
      <div class="category-card-list">
        <custom-header style="margin-bottom: 20px;" size="21" tag="h3" color="var(--white)">
          {{ header }}
        </custom-header>
        <custom-list-text icon-margin-right="15px" :list="list"/>
        <custom-button style="margin-top: auto; white-space: nowrap">
          Посмотрить все
        </custom-button>
      </div>
    </router-link>
  </li>
</template>

<script>

export default {
  props: {
    list: {
      type: Array
    },
    link: {
      type: String,
      default: '/'
    },
    color: {
      type: String
    },
    header: {
      type: String
    }
  }
}
</script>

<style>

.category-card-item:not(:last-child) {
  margin-bottom: 15px;
}

.category-card-item {
  display: flex;
  align-items: center;
}

.category-card-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 350px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.category-card {
  padding: 35px;
  gap: 24px;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .category-card:last-child a div {
    min-height: 100px;
  }
}

</style>