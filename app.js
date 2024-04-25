import CoverComponent from "./pinia/cartCover/coverComponent.js";
import NavbarComponent from "./pinia/cartCover/navbarComponent.js";
import FooterComponent from "./pinia/footer/footerComponent.js";

const { createApp } = Vue;
const { createPinia } = Pinia;

const routes = [{ path: "/", component: NavbarComponent }];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

const app = createApp({
  components: {
    CoverComponent,
    NavbarComponent,
    FooterComponent,
  },
});

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
