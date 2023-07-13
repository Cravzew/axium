<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'custom-container',
};
</script>

<style>
.container {
  max-width: 1296px;
  margin: 0 auto;
  padding: 0 40px;
}
</style>
