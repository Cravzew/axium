import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './components/UI';
import icons from './assets/icons';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

icons.forEach((icon) => {
  app.component(icon.name, icon);
});

app.use(store).use(router).mount('#app');
