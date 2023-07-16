<template>
  <div class="header-upper">
    <nav class="header-upper-left">
      <router-link to="/">
        <custom-text>
          О компании
        </custom-text>
      </router-link>
      <router-link to="/">
        <custom-text>
          Новости
        </custom-text>
      </router-link>
      <router-link to="/">
        <custom-text>
          Статьи
        </custom-text>
      </router-link>
      <router-link to="/">
        <custom-text>
          Контакты
        </custom-text>
      </router-link>
    </nav>
    <div class="header-upper-right">
      <custom-text class="header-upper-text" tag="a" href="tel:74959336147">
        <phone-icon/>
        +7 (495) 933-6147
      </custom-text>
      <custom-text class="header-upper-text" tag="a" href="mailto:max@maximum.su">
        <mail-icon/>
        max@maximum.su
      </custom-text>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header-upper {
  display: flex;
  padding: 24px 0;
  justify-content: space-between;
}

.header-upper-left {
  display: flex;
  justify-content: space-between;
  max-width: 346px;
  width: 100%;
}

.header-upper-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 367px;
  width: 100%;
}

.header-upper-text {
  display: flex;
  align-items: center;
}

@media (max-width: 1024px) {
  .header-upper {
    display: none;
  }
}
</style>