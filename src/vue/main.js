import { createApp } from "vue";
import VueLazyLoad from "vue3-lazyload";

//vuex хранилище, свзязывающее компоненты
import store from "./store";

//порядок компонентов на странице и их асинхронная подгрузка
import App from "./App.vue";

const app = createApp({
  extends: App,
});
app.use(VueLazyLoad, {
  loading: "",
  error: "",
});
app.use(store).mount("#app");
