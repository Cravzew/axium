<template>
  <header>
    <custom-container>
      <div class="header-upper">
        <nav class="header-upper-left">
          <custom-text>
            О компании
          </custom-text>
          <custom-text>
            Новости
          </custom-text>
          <custom-text>
            Статьи
          </custom-text>
          <custom-text>
            Контакты
          </custom-text>
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
      <div class="header-down">
        <router-link class="mr-101" to="/">
          <img src="../assets/images/logo.jpg" alt="logo axium">
        </router-link>
        <custom-button class="mr-101">
          Каталог
        </custom-button>
        <custom-input class="mr-101" placeholder="Поиск по сайту..." max-width="610px" button/>
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
    </custom-container>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header-counter {
  display: flex;
  align-items: center;
}

.header-counter svg {
  margin-right: 10px;
}

.header-down-icons {
  display: flex;
  align-items: center;
  max-width: 125px;
  justify-content: space-between;
  width: 100%;
}

.mr-101 {
  margin-right: 101px;
}

.header-down {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

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

.header-upper-text svg {
  margin-right: 16px;
}
</style>
