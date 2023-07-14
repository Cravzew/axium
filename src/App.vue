<template>
  <TheHeader/>
  <router-view/>
  <TheFooter/>
</template>

<style>
@font-face {
  font-family: 'Stolzl';
  src: local('Stolzl Regular'), local('Stolzl-Regular'),
  url('../src/assets/fonts/Stolzl-Regular.woff2') format('woff2'),
  url('../src/assets/fonts/Stolzl-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Stolzl';
  src: local('Stolzl Medium'), local('Stolzl-Medium'),
  url('../src/assets/fonts/Stolzl-Medium.woff2') format('woff2'),
  url('../src/assets/fonts/Stolzl-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:after,
*:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}

:root {
  --accent-1: #0063b0;
  --accent-2: #84c0ea;
  --black: #333333;
  --white: #ffffff;
  --black-0-3: rgba(51, 51, 51, 0.3);
  --other-grad: linear-gradient(
      180deg,
      rgba(170, 173, 178, 1) 0%,
      rgba(200, 201, 203, 1) 100%
  );
  --other-category-1: #f98c23;
  --other-category-2: #ae8eb5;
  --other-category-3: #e74f4e;
  --other-category-4: #91b450;
  --other-category-5: #efb434;
  --other-category-6: #0090b5;
  --other-category-7: #8467ca;
  --other-category-8: #c39440;
  --other-stroke-design-system: #9747ff;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

body {
  font-family: 'Stolzl', sans-serif;
}
</style>
<script setup>
import TheHeader from '@/components/Header/TheHeader.vue';
import TheFooter from "@/components/Footer/TheFooter.vue";</script>
