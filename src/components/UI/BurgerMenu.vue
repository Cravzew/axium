<template>
  <div class="header-burger">
    <button :class="['nav-toggle', {'opened': isActive}]" @click="toggleActive">
      <span class="bar-top"></span>
      <span class="bar-mid"></span>
      <span class="bar-bot"></span>
    </button>
    <transition name="slide-fade">
      <ul v-if="isOpen" class="header-burger-list">
        <router-link to="/">
          <custom-text size="16">
            О компании
          </custom-text>
        </router-link>
        <router-link to="#about-us">
          <custom-text size="16">
            Новости
          </custom-text>
        </router-link>
        <router-link to="/">
          <custom-text size="16">
            Статьи
          </custom-text>
        </router-link>
        <router-link to="/">
          <custom-text size="16">
            Контакты
          </custom-text>
        </router-link>
        <custom-button class="catalog-button">
          <router-link to="/catalog">
            Каталог
          </router-link>
        </custom-button>
      </ul>
    </transition>
    <transition name="fade">
      <div v-if="isOpen" @click.stop="toggleActive" class="header-burger-overlay"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'burger-menu',
  data() {
    return {
      isActive: false,
      isOpen: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      this.$store.commit('toggleScrollBlocking');
      this.isOpen = !this.isOpen
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.catalog-button {
  display: none;
}

.header-burger-list a {
  display: block;
  margin-top: 30px;
}

.header-burger-list button p a {
  margin-top: 0;
}

.header-burger-overlay {
  position: absolute;
  inset: 0;
  background-color: var(--black-0-3);
  z-index: 6;
}

.header-burger {
  display: none;
}

.header-burger-list {
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  background: var(--white);
  padding: 40px;
  padding-top: 100px;
  z-index: 10;
  width: 50%;
}

body {
  background: #333;
}

nav {
  height: 100vh;
}

.nav-toggle {
  background: transparent;
  border: 1px solid transparent;
  margin: 7px 0;
  margin-right: 30px;
  top: 50%;
  z-index: 15;
  position: relative;
}

.nav-toggle:focus {
  outline-width: 0;
}

.nav-toggle [class*='bar-'] {
  background: var(--accent-1);
  display: block;
  transform: rotate(0deg);
  transition: .2s ease all;
  border-radius: 8px;
  height: 5px;
  width: 50px;
  margin-bottom: 7px;
}

.nav-toggle .bar-bot {
  margin-bottom: 0;
}

.opened .bar-top {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 15% 15%;
  transform-origin: 15% 15%;
}

.opened .bar-mid {
  opacity: 0;
}

.opened .bar-bot {
  -webkit-transform: rotate(45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 15% 95%;
  transform-origin: 15% 95%;
}

@media (max-width: 1024px) {
  .header-burger {
    display: block;
  }

  .header-burger-list {
    display: flex;
    flex-direction: column;
  }

  .catalog-button {
    display: block;
    margin-top: auto;
  }
}

@media (max-width: 768px) {
  .header-burger-list {
    padding-left: 20px;
  }
}

@media (max-width: 578px) {
  .header-burger-overlay {
    display: none;
  }

  .header-burger-list {
    width: 100%;
  }
}
</style>
