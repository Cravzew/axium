<template>
  <section class="about-main">
    <div class="about-main-text">
      <custom-text style="margin-bottom: 10px;" size="16">
        Компания "Медтех" - это лидер в области производства и продажи медицинского оборудования. Мы работаем на рынке
        более 10 лет и предлагаем широкий ассортимент продукции высокого качества.
      </custom-text>
      <custom-text style="margin-bottom: 10px;" size="16">
        Наша компания специализируется на медицинском оборудовании для различных областей медицины, таких как хирургия,
        реабилитация, диагностика и терапия. В нашем каталоге товаров представлены инновационные решения для различных
        сфер медицинской деятельности.
      </custom-text>
      <custom-text style="margin-bottom: 10px;" size="16">
        Мы работаем только с проверенными и надежными производителями, которые гарантируют качество своей продукции.
        Кроме того, мы контролируем каждый этап производства и поставки оборудования, чтобы нашим клиентам было
        предоставлено только лучшее.
      </custom-text>
      <custom-text size="16">
        Компания "Медтех" заботится о своих клиентах, поэтому мы предлагаем не только качественное оборудование, но и
        квалифицированную консультацию и помощь в выборе необходимой продукции.
      </custom-text>
    </div>
    <div class="about-main-photo">
      <img class="about-main-image" src="../../../src/assets/images/aboutCatalog.png" alt="aboutCatalog">
      <custom-button>
        Скачать каталог (pdf)
      </custom-button>
    </div>
  </section>
</template>

<script>

export default {}
</script>

<style scoped>
.about-main-image {
  margin-bottom: 40px;
}

.about-main-photo {
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-main {
  display: flex;
  justify-content: space-between;
}

.about-main-text {
  max-width: 746px;
  padding: 52px 0;
}
</style>