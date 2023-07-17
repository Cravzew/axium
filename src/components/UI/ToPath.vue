<template>
  <div class="to-path">
    <custom-text v-for="(path, index) in paths" :key="index">
      <blue-square-icon/>
      {{ path }}
    </custom-text>
  </div>
</template>

<script>
export default {
  name: 'to-path',
  props: {
    paths: {
      type: Array
    }
  }
}
</script>

<style scoped>
.to-path {
  padding: 40px 0;
  display: flex;
  align-items: center;
}

.to-path p:first-child svg {
  display: none;
}

.to-path p {
  margin-right: 16px;
}

.to-path p svg {
  margin-right: 16px;
}
</style>