<template>
  <section class="catalog-main">
    <custom-grid class="grid-catalog-main" tag="ul" columns="4" style="gap: 24px">
      <catalog-main-card color="var(--other-category-1)" header="Имплантология" :list="listOne"/>
      <catalog-main-card color="var(--other-category-2)" header="Хирургия" :list="listTwo"/>
      <catalog-main-card color="var(--other-category-3)" header="Пародонтология" :list="listThree"/>
      <catalog-main-card color="var(--other-category-4)" header="Ортопедия" :list="listFour"/>
      <catalog-main-card color="var(--other-category-5)" header="Терапия и диагностика" :list="listFive"/>
      <catalog-main-card color="var(--other-category-6)" header="Ортодонтия" :list="listSix"/>
      <catalog-main-card color="var(--other-category-7)" header="Расходные материалы" :list="listSeven"/>
      <catalog-main-card color="var(--other-category-8)" header="Весь каталог"/>
    </custom-grid>
  </section>
</template>

<script>
import CatalogMainCard from "@/components/CatalogMain/CatalogMainCard.vue";
import objectSvg from "@/assets/icons/objectSvg";

export default {
  components: {CatalogMainCard},
  data() {
    return {
      listOne: [
        {
          name: 'Набор для фиксации костных блоков',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Биоматериалы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Инструменты для работы с биоматериалами',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Ронжиры',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Костные мельницы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Ножницы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Чашки для костного материала',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
      ],
      listTwo: [
        {
          name: 'Элеваторы и люксаторы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Периотомы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Пинцеты',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Распаторы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Иглодержатели',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Ножницы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Лезвия и рукоятки для лезвий',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
      ],
      listThree: [
        {
          name: 'Кюреты Грейси',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Скалеры',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Зонды пародонтологические',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
      ],
      listFour: [
        {
          name: 'Набор для снятия коронок',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Коронкосниматели',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Эмалевые ножи',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Зеркала для фотографирования',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Динамометрические ключи и отвертки',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Контрастеры',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
      ],
      listFive: [
        {
          name: 'Зеркала, микрозеркала и рукоятки',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Щипцы для извлечения сломанных инструментов из каналов',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Инструменты для композитов',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Держатель файлов',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Пинцеты',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
      ],
      listSix: [
        {
          name: 'Набор для фиксации костных блоков',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Биоматериалы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Инструменты для работы с биоматериалами',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Ронжиры',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Костные мельницы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Чашки для костного материала',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
      ],
      listSeven: [
        {
          name: 'Аспираторы, адаптеры',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Ирригационные системы',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Шовный материал',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Шовный материал',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Стерильные комплекты для хирургии',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
        {
          name: 'Лезвия для скальпелей',
          icon: objectSvg.whiteSquare,
          class: 'category-card-item'
        },
      ],
    }
  }
}
</script>

<style scoped>

.catalog-main {
  padding-bottom: 120px;
}

@media (max-width: 1200px) {
  .grid-catalog-main {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .grid-catalog-main {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>