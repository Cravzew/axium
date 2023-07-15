<template>
  <div class="category-card" :style="`background-color: ${color}`">
    <router-link :to="link">
      <div class="category-card-list">
        <custom-header style="margin-bottom: 20px;" size="21" tag="h3" color="var(--white)">
          {{ header }}
        </custom-header>
        <custom-list-text icon-margin-right="15px" :list="list"/>
      </div>
      <custom-button>
        Посмотрить все
      </custom-button>
    </router-link>
  </div>
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
  min-height: 354px;
}

.category-card {
  padding: 35px;
  gap: 24px;
  border-radius: 10px;
}

</style>