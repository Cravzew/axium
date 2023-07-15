<template>
  <section class="all-brands">
    <div class="all-brands-header">
      <custom-header tag="h2" size="24">
        Все бренды
      </custom-header>
      <arrow-link-icon/>
    </div>
    <custom-grid class="all-brands-grid" columns="3" gap="0" style="margin-left: auto">
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
  flex-direction: column;
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

@media (max-width: 1024px) {
  .all-brands-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .all-brands-grid {
    grid-template-columns: repeat(1, 1fr) !important;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>