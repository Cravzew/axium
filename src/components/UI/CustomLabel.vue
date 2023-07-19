<template>
  <div class="label" v-for="option in options" :key="option.id">
    <label class="custom-label">
      <input :type="type" :name="option.value" :value="option.value">
      <custom-text tag="span">{{ option.label }}</custom-text>
    </label>
  </div>
</template>

<script>
export default {
  name: 'custom-label',
  props: {
    options: {
      type: Array
    },
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
/* для элемента input c type="label" */
.custom-label > input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label связанного с .custom-label */
.custom-label > span {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

/* создание в label псевдоэлемента  before со следующими стилями */
.custom-label > span::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid var(--black-0-3);
  border-radius: 4px;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

/* стили при наведении курсора на радио */
.custom-label > input:not(:disabled):not(:checked) + span:hover::before {
  border-color: var(--accent-2);
}

/* стили для активной радиокнопки (при нажатии на неё) */
.custom-label > input:not(:disabled):active + span::before {
  background-color: var(--accent-2);
  border-color: var(--accent-2);
}

/* стили для радиокнопки, находящейся в фокусе */
.custom-label > input:focus + span::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
.custom-label > input:focus:not(:checked) + span::before {
  border-color: var(--accent-2);
}

/* стили для радиокнопки, находящейся в состоянии checked */
.custom-label > input:checked + span::before {
  border-color: var(--accent-1);
  background-image: url("@/assets/images/blueSquare.png");
}

/* стили для радиокнопки, находящейся в состоянии disabled */
.custom-label > input:disabled + span::before {
  background-color: var(--black-0-3);
}

body {
  padding: 20px 50px;
}

.label {
  margin-bottom: 16px;
}
</style>
