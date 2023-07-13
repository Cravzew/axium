<template>
  <footer>
    <custom-container>
      <custom-grid class="footer-up" columns="4">
        <router-link to="/">
          <img class="footer-img" src="../assets/images/footerLogo.jpg" alt="logo axiom">
        </router-link>
        <footer-nav-list :lists="aboutCompany" header="О компании"/>
        <footer-nav-list :lists="category" header="Популярные категории"/>
        <footer-nav-list :lists="contacts" header="Контакты"/>
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
import FooterNavList from "@/components/FooterNavList.vue";
import iconObject from "@/assets/icons/objectSvg";

export default {
  components: {FooterNavList},
  data() {
    return {
      aboutCompany: [
        {name: 'О компании', link: '/'},
        {name: 'Новости', link: '/'},
        {name: 'Контакты', link: '/'},
        {name: 'Статьи', link: '/'}
      ],
      category: [
        {name: 'Имплантология', link: '/'},
        {name: 'Хирургия', link: '/'},
        {name: 'Пародонтология', link: '/'},
        {name: 'Ортопедия', link: '/'},
        {name: 'Терапия и диагностика', link: '/'},
        {name: 'Ортодонтия', link: '/'},
        {name: 'Расходные материалы', link: '/'},
        {name: 'Оборудование', link: '/'}
      ],
      contacts: [
        {name: 'г. Москва, ул. Усачева, д. 62, стр. 1 офис 1', link: '/', icon: iconObject.map},
        {name: '+7 (495) 933-6147', link: '/', icon: iconObject.phone},
        {name: '+7 (495) 933-6147', link: '/', icon: iconObject.phone},
        {name: 'max@maximum.su', link: '/', icon: iconObject.mail}
      ],
    }
  },
}
</script>

<style scoped>

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
</style>