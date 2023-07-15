<template>
  <custom-container>
    <the-hero/>
    <all-brands/>
    <catalog-main/>
    <cards-main title="Популярные товары"/>
    <about-main/>
    <cards-main title="Новинки"/>
  </custom-container>
</template>

<script>
import TheHero from "@/components/Hero/TheHero.vue";
import AllBrands from "@/components/AllBrands/AllBrands.vue";
import CatalogMain from "@/components/CatalogMain/CatalogMain.vue";
import CardsMain from "@/components/CardsMain/CardsMain.vue";
import AboutMain from "@/components/AboutMain/AboutMain.vue";

export default {
  components: {AboutMain, CardsMain, CatalogMain, AllBrands, TheHero}
};
</script>

<style lang="scss" scoped>

</style>
