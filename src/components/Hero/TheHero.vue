<template>
  <section class="hero">
    <div class="hero-content">
      <custom-header class="hero-header" size="32" color="var(--white)">
        Ut viverra viverra phasellus id in eleifend.
      </custom-header>
      <custom-list-text icon-margin-right="20px" :list="list" margin="0 0 15px 20px" text-size="16"/>
      <custom-button class="hero-button" big>
        Каталог
      </custom-button>
    </div>
    <img class="hero-image" src="../../assets/images/heroImage.jpg" alt="heroImage">
  </section>
</template>

<script>
import objectSvg from "@/assets/icons/objectSvg";
export default {
  data() {
    return {
      list: [
        {name: 'Ut viverra viverra phasellus id in eleifend.', class: 'hero-list', icon: objectSvg.blueSquare},
        {name: 'Ut viverra viverra phasellus id in eleifend.', class: 'hero-list', icon: objectSvg.blueSquare},
        {name: 'Ut viverra viverra phasellus id in eleifend.', class: 'hero-list', icon: objectSvg.blueSquare},
      ]
    }
  }
}
</script>

<style>
.hero-button {
  margin-top: 30px;
}

.hero-list {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.hero {
  background: var(--other-grad);
  padding: 88px 100px;
  position: relative;
}

.hero-content {
  max-width: 429px;
  position: relative;
  z-index: 1;
}

.hero-header {
  margin: 0;
  margin-bottom: 30px;
}

.hero-image {
  position: absolute;
  top: 0;
  right: 0;
}

@media (max-width: 1024px) {
  .hero-image {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-content {
    max-width: inherit;
  }
}

@media (max-width: 578px) {
  .hero {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
}
</style>