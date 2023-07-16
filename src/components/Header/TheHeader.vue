<template>
  <header>
    <custom-container>
      <header-upper-desktop/>
      <header-middle/>
      <div class="header-down">
        <custom-input class="header-input" placeholder="Поиск по сайту..." button max-width="100%"/>
      </div>
    </custom-container>
  </header>
</template>

<script>
import HeaderUpperDesktop from "@/components/Header/HeaderUpperDesktop.vue";
import HeaderMiddle from "@/components/Header/HeaderMiddle.vue";

export default {
  components: {HeaderMiddle, HeaderUpperDesktop},
};
</script>

<style>

.header-down {
  display: none;
}

@media (max-width: 1024px) {
  .header-down {
    display: block;
    margin-bottom: 40px;
  }
}

</style>
