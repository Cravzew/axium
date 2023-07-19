<template>
  <footer>
    <custom-container>
      <custom-grid class="footer-up" columns="4">
        <router-link to="/">
          <img class="footer-img" src="../../assets/images/footerLogo.jpg" alt="logo axiom">
        </router-link>
        <nav class="footer-nav">
          <custom-header size="16b" tag="h2">
            О компании
          </custom-header>
          <custom-list-text is-link :list="aboutCompany" text-color="var(--black)"/>
        </nav>
        <nav class="footer-nav">
          <custom-header size="16b" tag="h2">
            Популярные категории
          </custom-header>
          <custom-list-text is-link :list="category" text-color="var(--black)"/>
        </nav>
        <nav class="footer-nav">
          <custom-header size="16b" tag="h2">
            Контакты
          </custom-header>
          <custom-list-text icon-margin-right="15px" :list="contacts" text-color="var(--black)"/>
        </nav>
      </custom-grid>
      <div class="footer-down">
        <custom-text style="opacity: 0.5">
          2023 (с) Все права защищены
        </custom-text>
        <custom-text style="opacity: 0.5">
          Политика конфиденциальности
        </custom-text>
      </div>
    </custom-container>
  </footer>
</template>

<script>
import iconObject from "@/assets/icons/objectSvg";

export default {
  data() {
    return {
      aboutCompany: [
        {name: 'О компании', link: '#about-us', class: 'footer-nav-list'},
        {name: 'Новости', link: '/', class: 'footer-nav-list'},
        {name: 'Контакты', link: '/', class: 'footer-nav-list'},
        {name: 'Статьи', link: '/', class: 'footer-nav-list'}
      ],
      category: [
        {name: 'Имплантология', link: '/products?category=implantology&page=1', class: 'footer-nav-list'},
        {name: 'Хирургия', link: '/products?category=surgery&page=1', class: 'footer-nav-list'},
        {name: 'Пародонтология', link: '/products?category=periodontology&page=1', class: 'footer-nav-list'},
        {name: 'Ортопедия', link: '/products?category=orthopedics&page=1', class: 'footer-nav-list'},
        {name: 'Терапия и диагностика', link: '/products?category=diagnostics&page=1', class: 'footer-nav-list'},
        {name: 'Ортодонтия', link: '/products?category=orthodontics&page=1', class: 'footer-nav-list'},
        {name: 'Расходные материалы', link: '/products?category=other&page=1', class: 'footer-nav-list'},
        {name: 'Оборудование', link: '/', class: 'footer-nav-list'}
      ],
      contacts: [
        {
          name: 'г. Москва, ул. Усачева, д. 62, стр. 1 офис 1',
          link: '/',
          icon: iconObject.map,
          class: 'footer-nav-list'
        },
        {name: '+7 (495) 933-6147', link: 'tel:+74959336147', icon: iconObject.phone, class: 'footer-nav-list'},
        {name: '+7 (495) 933-6147', link: 'tel:+74959336147', icon: iconObject.phone, class: 'footer-nav-list'},
        {name: 'max@maximum.su', link: 'mailto:max@maximum.su', icon: iconObject.mail, class: 'footer-nav-list'}
      ],
    }
  },
}
</script>

<style>

.footer-nav-list {
  display: flex;
  margin-bottom: 15px;
  align-items: center;
}

.footer-nav h2 {
  margin-bottom: 25px;
}

.footer-img {
  width: 195px;
}

.footer-down {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.footer-up {
  padding: 60px 0;
  border-top: 1px solid var(--black-0-3);
  border-bottom: 1px solid var(--black-0-3);
  margin-top: 120px;
  margin-bottom: 30px;
}

@media (max-width: 1024px) {
  .footer-up {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 576px) {
  .footer-up {
    grid-template-columns: repeat(1, 1fr) !important;
    text-align: center;
  }

  .footer-down {
    flex-direction: column;
  }
}
</style>