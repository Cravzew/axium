<template>
  <div class="header-down">
    <burger-menu/>
    <router-link class="header-logo" to="/">
      <img src="../../assets/images/logo.jpg" alt="logo axium">
    </router-link>
    <custom-button class="header-catalog">
      <router-link to="/catalog">
        Каталог
      </router-link>
    </custom-button>
    <custom-input class="header-input" placeholder="Поиск по сайту..." max-width="610px" button/>
    <div class="header-down-icons">
      <div class="header-counter">
        <card-icon/>
        <custom-text>
          0
        </custom-text>
      </div>
      <div class="header-counter">
        <heart-icon/>
        <custom-text>
          0
        </custom-text>
      </div>
    </div>
  </div>
</template>
<script>
import BurgerMenu from "@/components/UI/BurgerMenu.vue";

export default {
  components: {BurgerMenu}

}
</script>

<style scoped>
.header-counter {
  display: flex;
  align-items: center;
}

.header-counter svg {
  margin-right: 10px;
}

.header-logo,
.header-catalog,
.header-input {
  margin-right: 101px;
}

.header-down-icons {
  display: flex;
  align-items: center;
  max-width: 125px;
  justify-content: space-between;
  width: 100%;
}

.header-down {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.header-upper-text svg {
  margin-right: 16px;
}

@media (max-width: 1024px) {

  .header-down {
    padding-top: 30px;
    padding-bottom: 15px;
    margin-bottom: 0;
  }

  .header-catalog {
    display: none;
  }

  .header-input {
    display: none;
  }

  .header-logo {
    margin-right: 30px;
  }

  .header-down-icons {
    margin-left: auto;
  }
}

@media (max-width: 768px) {

  .header-logo {
    margin-right: auto;
  }

  .header-input {
    display: none;
  }
}

@media (max-width: 578px) {
  .header-logo {
    display: none;
  }

  .header-down-icons {
    margin-left: auto;
  }
}
</style>