<template>
  <custom-container>
    <to-path :paths="paths"/>
    <header-section style="margin-bottom: 60px;">
      Каталог товаров
    </header-section>
    <ul class="category-list">
      <category-card :list="list"/>
    </ul>
    <about-main/>
  </custom-container>
</template>

<script>
import AboutMain from "@/components/AboutMain/AboutMain.vue";
import HeaderSection from "@/components/UI/HeaderSection.vue";
import photo from '@/assets/images/productCard.jpg'

export default {
  components: {HeaderSection, AboutMain},
  data() {
    return {
      paths: ['Главная', 'Каталог'],
      list: [
        {name: 'Имплантология', link: 'implantology', image: photo},
        {name: 'Хирургия', link: 'surgery', image: photo},
        {name: 'Пародонтология', link: 'periodontology', image: photo},
        {name: 'Ортопедия', link: 'orthopedics', image: photo},
        {name: 'Терапия и диагностика', link: 'diagnostics', image: photo},
        {name: 'Ортодонтия', link: 'orthodontics', image: photo},
        {name: 'Расходные материалы', link: 'other', image: photo},
      ]
    }
  }
}
</script>

<style scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}
</style>