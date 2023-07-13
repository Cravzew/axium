<template>
  <component :is="tag" :class="customHeaderSize">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'custom-header',
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    size: {
      type: String,
      default: '32',
    },
  },
  computed: {
    customHeaderSize() {
      return {
        'header-32': this.size === '32',
        'header-24': this.size === '24',
        'header-21': this.size === '21',
        'header-16': this.size === '16',
        'header-16b': this.size === '16b',
      };
    },
  },
};
</script>

<style scoped>
.header-32 {
  line-height: 150%;
  font-size: 32px;
}

.header-24 {
  line-height: 150%;
  font-size: 24px;
}

.header-21 {
  line-height: 150%;
  font-size: 21px;
}

.header-16 {
  line-height: 150%;
  font-size: 16px;
}

.header-16 {
  line-height: 150%;
  font-size: 16px;
  font-weight: 500;
}

</style>
