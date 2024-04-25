import CoverComponent from "./pinia/cartCover/coverComponent.js";
import NavbarComponent from "./pinia/cartCover/navbarComponent.js";
import FooterComponent from "./pinia/footer/footerComponent.js";
import perfumeComponent from "./pinia/perfumeCover/perfumeComponent.js";
import OceanComponent from "./pinia/productPage/oceanComponent.js";
import BoardComponent from "./pinia/productPage/boardComponent.js";
import FlowerComponent from "./pinia/productPage/flowerComponent.js";
import FruitComponent from "./pinia/productPage/fruitComponent.js";

const { createApp } = Vue;
const { createPinia } = Pinia;

const routes = [
  { path: "/", component: perfumeComponent },
  { path: "/allmenu", component: NavbarComponent },
  { path: "/ocean", component: OceanComponent },
  { path: "/board", component: BoardComponent },
  { path: "/flower", component: FlowerComponent },
  { path: "/fruit", component: FruitComponent },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

const app = createApp({
  components: {
    CoverComponent,
    NavbarComponent,
    FooterComponent,
    perfumeComponent,
    OceanComponent,
    BoardComponent,
    FruitComponent,
    FlowerComponent,
  },
});

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
