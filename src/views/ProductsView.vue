<template>
  <custom-container>
    <to-path :paths="paths"/>
    <header-section style="margin-bottom: 60px;">
      {{ product.title }}
    </header-section>
    <div class="catalogs">
      <div class="catalogs-aside">
        <div>
          <custom-header size="21" style="margin: 0; margin-bottom: 24px;">
            Бренды
          </custom-header>
          <div class="brands-radio-list">
            <custom-label :options="brands" :selected-option="selectedOption"/>
          </div>
        </div>
        <div>
          <custom-header size="21" style="margin: 0; margin-bottom: 24px;">
            Наличие
          </custom-header>
          <div class="brands-radio-list">
            <custom-label :options="available" :selected-option="selectedOption"/>
          </div>
        </div>
      </div>
      <custom-grid tag="ul" style="max-width: 966px; margin-left: auto" columns="3">
        <product-card :list="displayedPosts"/>
      </custom-grid>
    </div>
    <div class="pagination-container">
      <custom-button class="catalog-pagination" v-for="page in totalPages" :key="page" @click="displayPosts(page)">
        {{ page }}
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
      selectedOption: null,
      postsPerPage: 12,
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
      return this.products[0].list.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.products[0].list.length / this.postsPerPage);
    }
  },
  methods: {
    displayPosts(pageNumber) {
      this.$router.push({ query: {'category': this.products[0].article, 'page': pageNumber}});
    }
  }
}
</script>

<style scoped>

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

</style>