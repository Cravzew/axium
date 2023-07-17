<template>
  <custom-container>
    <the-hero/>
    <all-brands/>
    <catalog-main/>
    <cards-main :list="popularList" title="Популярные товары"/>
    <about-main/>
    <cards-main :list="newbiesList" title="Новинки"/>
  </custom-container>
</template>

<script>
import TheHero from "@/components/Hero/TheHero.vue";
import AllBrands from "@/components/AllBrands/AllBrands.vue";
import CatalogMain from "@/components/CatalogMain/CatalogMain.vue";
import CardsMain from "@/components/CardsMain/CardsMain.vue";
import AboutMain from "@/components/AboutMain/AboutMain.vue";
import photo from "@/assets/images/productCard.jpg";

export default {
  components: {AboutMain, CardsMain, CatalogMain, AllBrands, TheHero},
  data() {
    return {
      newbiesList: [
        {name: 'Скальпель', price: '4 600 P', link: '/', image: photo},
        {name: 'Скальпель', price: '5 600 P', link: '/', image: photo},
        {name: 'Скальпель', price: '9 600 P', link: '/', image: photo},
        {name: 'Скальпель', price: '10 600 P', link: '/', image: photo},
      ],
      popularList: [
        {name: 'Ножницы', price: '42 600 P', link: '/', image: photo},
        {name: 'Ножницы', price: '12 600 P', link: '/', image: photo},
        {name: 'Ножницы', price: '8 600 P', link: '/', image: photo},
        {name: 'Ножницы', price: '3 600 P', link: '/', image: photo},
      ],

    }
  },
};
</script>

<style scoped>

</style>
