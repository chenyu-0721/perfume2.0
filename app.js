import NavbarComponent from "./pinia/cartCover/navbarComponent.js";
import cartComponent from "./pinia/cartCover/cartComponent.js";

const { createApp } = Vue;
const { createPinia } = Pinia;

const routes = [
  { path: "/", component: NavbarComponent },
  { path: "/cart", component: cartComponent },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

const app = createApp({
  components: {
    NavbarComponent,
    cartComponent,
  },
});

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
