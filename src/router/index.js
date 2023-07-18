import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CatalogView from "@/views/CatalogView.vue";
import ProductsView from "@/views/ProductsView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogView
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsView
    }
];

const router = createRouter({
    // eslint-disable-next-line no-undef
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;