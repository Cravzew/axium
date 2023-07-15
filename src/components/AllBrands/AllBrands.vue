<template>
  <section class="all-brands">
    <div class="all-brands-header">
      <custom-header tag="h2" size="24">
        Все бренды
      </custom-header>
      <arrow-link-icon/>
    </div>
    <custom-grid columns="3" areas="2">
      <router-link to="/" class="all-brands-logo">
        <img src="../../../src/assets/images/biohorizonsLogo.jpg" alt="biohorizons">
      </router-link>
      <router-link to="/" class="all-brands-logo">
        <img src="../../../src/assets/images/kimLogo.jpg" alt="kim">
      </router-link>
      <router-link to="/" class="all-brands-logo">
        <img src="../../../src/assets/images/seilerLogo.jpg" alt="seiler">
      </router-link>
      <router-link to="/" class="all-brands-logo">
        <img src="../../../src/assets/images/univetLogo.jpg" alt="univet">
      </router-link>
      <router-link to="/" class="all-brands-logo">
        <img src="../../../src/assets/images/nouvagLogo.jpg" alt="nouvag">
      </router-link>
      <router-link to="/" class="all-brands-logo">
        <img src="../../../src/assets/images/gammadentalLogo.jpg" alt="gammaDental">
      </router-link>
    </custom-grid>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>

.all-brands {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 120px 0;
}

.all-brands-header {
  display: flex;
  align-items: center;
}

.all-brands-header h2 {
  margin-right: 25px;
}

</style>