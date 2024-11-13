import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ShopView from "@/views/ShopView.vue";
import ContactView from "@/views/ContactView.vue";
import SingleItemView from "@/views/SingleItemView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/item/:id",
      name: "item",
      component: SingleItemView,
    },
    { path:"/login",
      name:"login",
      component: LoginView,
    }
  ],
});

export default router;
