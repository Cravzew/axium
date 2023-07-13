<template>
  <div class="input-box" :style=[customMaxWidthInput]>
    <input :placeholder="placeholder" class="input" type="text">
    <button class="input-button" v-if="button">
      <search-icon/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: '300px'
    },
    button: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customMaxWidthInput() {
      return {
        maxWidth: this.maxWidth
      }
    }
  }
}
</script>

<style scoped>
.input-button {
  border-left: 1px solid #b1b1b1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-2);
  width: 41px;
  height: 41px;
  border-radius: 0 8px 8px 0;
}

.input-box {
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--black-0-3);
  width: 100%;
}

.input {
  padding: 10px 20px;
  outline: none;
  border: none;
  font-size: 14px;
  line-height: 150%;
  width: 100%;
  background-color: transparent;
}

.input::placeholder {
  opacity: 0.5;
}
</style>