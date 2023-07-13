<template>
  <nav class="footer-nav">
    <custom-header size="16b" tag="h2">
      {{ header }}
    </custom-header>
    <ul>
      <li v-for="(item, index) in lists" :key="index">
        <div v-html="item.icon" :style="`margin-right: ${item.icon ? '16px' : '0'}`"/>
        <custom-text>
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </custom-text>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    },
    lists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.footer-nav li {
  display: flex;
  margin-bottom: 15px;
  align-items: center;
}

.footer-nav h2 {
  margin-bottom: 25px;
}
</style>