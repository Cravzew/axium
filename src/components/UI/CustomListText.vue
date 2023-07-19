<template>
  <component :is="tag">
    <li :class="item.class" v-for="(item, i) of list"
        :key="i + Math.round(Math.random() * 10000)">
      <div :style="item.icon && customIconMargin" v-html="item.icon"/>
      <router-link v-if="isLink" :to="item.link">
        <custom-text :color="textColor" :size="textSize">
          {{ item.name }}
        </custom-text>
      </router-link>
      <custom-text :color="textColor" :size="textSize" v-else>
        <a :href="item.link">
          {{ item.name }}
        </a>
      </custom-text>
    </li>
  </component>
</template>

<script>
export default {
  name: 'custom-list-text',
  props: {
    list: {
      type: Array,
    },
    iconMarginRight: {
      type: String,
      default: '15px'
    },
    textColor: {
      type: String,
      default: 'var(--white)'
    },
    textSize: {
      type: String,
    },
    tag: {
      type: String,
      default: 'ul',
    },
    isLink: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '/',
    },
  },
  computed: {
    customIconMargin() {
      return {
        marginRight: this.iconMarginRight
      }
    }
  }
}
</script>

<style scoped>
</style>