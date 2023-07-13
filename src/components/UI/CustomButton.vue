<template>
  <button :class="[customButtonSize, 'button']">
    <custom-text color="var(--white)">
      <slot></slot>
    </custom-text>
  </button>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
    big: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customButtonSize() {
      return this.big ? 'button-large' : 'button-small'
    }
  }
}
</script>

<style scoped>
.button {
  background-color: var(--accent-1);
  border-radius: 10px;
}

.button-small {
  padding: 10px 25px;
}

.button-large {
  padding: 15px 35px;
}
</style>