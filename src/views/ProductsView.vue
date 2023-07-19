<template>
  <custom-container>
    <to-path :paths="paths"/>
    <header-section style="margin-bottom: 60px;">
      {{ product.title }}
    </header-section>
    <div class="catalog-buttons">
      <custom-button @click="toggleActive">
        Фильтры
      </custom-button>
      <div v-if="isOpen" class="catalog-burger">
        <div>
          <custom-header size="21" style="margin: 0; margin-bottom: 24px;">
            Бренды
          </custom-header>
          <div class="brands-radio-list">
            <custom-label :options="brands" type="checkbox"/>
          </div>
        </div>
        <div>
          <custom-header size="21" style="margin: 0; margin-bottom: 24px;">
            Наличие
          </custom-header>
          <div class="brands-radio-list">
            <custom-label :options="available" type="radio"/>
          </div>
          <custom-button @click="toggleActive" class="catalog-burger-close">
            X
          </custom-button>
        </div>
      </div>
    </div>
    <div class="catalogs">
      <div class="catalogs-aside">
        <div>
          <custom-header size="21" style="margin: 0; margin-bottom: 24px;">
            Бренды
          </custom-header>
          <div class="brands-radio-list">
            <custom-label :options="brands" type="checkbox"/>
          </div>
        </div>
        <div>
          <custom-header size="21" style="margin: 0; margin-bottom: 24px;">
            Наличие
          </custom-header>
          <div class="brands-radio-list">
            <custom-label :options="available" type="radio"/>
          </div>
        </div>
      </div>
      <ul class="catalog-group" v-if="displayedPosts.length > 1" tag="ul" style="max-width: 966px; margin-left: auto"
          columns="3">
        <product-card :list="displayedPosts"/>
      </ul>
      <custom-text style="text-align: center" v-else>
        Товар отсутствует
      </custom-text>
    </div>
    <div class="pagination-container" v-if="displayedPosts.length > 1">
      <custom-button class="catalog-pagination" style="background-color: var(--accent-2)" v-if="currentPage !== 1"
                     @click="displayPosts(currentPage - 1)">
        {{ currentPage - 1 }}
      </custom-button>
      <custom-button class="catalog-pagination">
        {{ currentPage }}
      </custom-button>
      <custom-button class="catalog-pagination" style="background-color: var(--accent-2)"
                     v-if="currentPage !== totalPages"
                     @click="displayPosts(currentPage + 1)">
        {{ currentPage + 1 }}
      </custom-button>
    </div>
  </custom-container>
</template>

<script>
import {mapGetters} from "vuex";
import ProductCard from "@/components/UI/ProductCard.vue";

export default {
  components: {ProductCard},
  data() {
    return {
      paths: ['Главная', 'Каталог товаров'],
      brands: [
        {id: 'option1', value: 'brands', label: 'BioHorizons'},
        {id: 'option2', value: 'brands', label: 'YDM'},
        {id: 'option3', value: 'brands', label: 'Seiler'},
        {id: 'option4', value: 'brands', label: 'Swarovski'},
        {id: 'option5', value: 'brands', label: 'Univet'},
        {id: 'option6', value: 'brands', label: 'Omnia'},
      ],
      available: [
        {id: 'option1', value: 'available', label: 'В наличии'},
        {id: 'option2', value: 'available', label: 'Под заказ'},
      ],
      postsPerPage: 12,
      isActive: false,
      isOpen: false
    }
  },
  computed: {
    ...mapGetters([
      'products'
    ]),
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    product() {
      let result = {}
      this.products.map((item) => {
        if (item.article === this.$route.query.category) {
          result = item
        }
      })
      return result
    },
    displayedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = this.currentPage * this.postsPerPage;
      let result = []
      this.products.map((item) => {
        if (item.article === this.$route.query.category) {
          result = result.concat(item.list)
        }
      })
      return result.slice(startIndex, endIndex);
    },
    totalPages() {
      let result = []
      this.products.map((item) => {
        if (item.article === this.$route.query.category) {
          result = result.concat(item.list)
        }
      })
      return Math.ceil(result.length / this.postsPerPage);
    }
  },
  methods: {
    displayPosts(pageNumber) {
      let result;
      this.products.map((item) => {
        if (item.article === this.$route.query.category) {
          result = item.article
        }
      })
      this.$router.push({query: {'category': result, 'page': pageNumber}});
    },
    toggleActive() {
      this.isActive = !this.isActive;
      this.$store.commit('toggleScrollBlocking');
      this.isOpen = !this.isOpen;
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>

.catalog-burger {
  position: absolute;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;
  background-color: var(--white);
}

.catalog-burger-close {
  position: absolute;
  top: 30px;
  right: 30px;
}

.catalog-burger {
  padding: 40px;
}

.catalog-buttons {
  display: none;
}

.catalog-group {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 24px;
  justify-content: flex-end;
}

.catalog-pagination {
  margin-right: 16px;
}

.pagination-container {
  padding-top: 60px;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
}

.catalogs {
  display: flex;
  justify-content: space-between;
}

.brands-radio-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

.catalogs-aside {
  position: sticky;
  max-height: 60vh;
  top: 60px;
}

@media (max-width: 1024px) {
  .catalogs-aside {
    display: none;
  }

  .catalog-group {
    justify-content: center;
  }

  .catalog-buttons {
    display: flex;
    max-width: 240px;
    justify-content: space-between;
    margin-bottom: 60px;
  }
}
</style>