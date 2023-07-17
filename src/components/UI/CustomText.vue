<template>
  <component :is="tag" :class="customTextSize" :style="customTextColor">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'custom-text',
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    size: {
      type: String,
      default: '14',
    },
    color: {
      type: String,
      default: 'var(--black)',
    },
  },
  computed: {
    customTextSize() {
      return {
        'text-16': this.size === '16',
        'text-16b': this.size === '16b',
        'text-14': this.size === '14',
        'text-12': this.size === '12',
      };
    },
    customTextColor() {
      return {
        color: this.color,
      };
    },
  },
};
</script>

<style>

.text-16 {
  line-height: 150%;
  font-size: 16px;
}

.text-16b {
  line-height: 150%;
  font-size: 16px;
  font-weight: 500;
}

.text-14 {
  line-height: 150%;
  font-size: 14px;
}

.text-12 {
  line-height: 150%;
  font-size: 12px;
}

</style>
