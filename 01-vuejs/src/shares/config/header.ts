import { ROUTERS } from "./router";

export const HEADERS_MENU = [
  {
    title: "Home",
    router: ROUTERS.HOME,
  },
  {
    title: "Shop",
    router: ROUTERS.SHOP,
  },
  {
    title: "About",
    router: ROUTERS.ABOUT,
  },
  {
    title: "Contact",
    router: ROUTERS.CONTACT,
  },
];

export const HEADERS_ICON = [
  {
    title: "User",
    icon: "mdi:user-warning-outline",
    router: ROUTERS.USER,
  },
  {
    title: "Search",
    icon: "mdi:search",
    router: ROUTERS.SEARCH,
  },
  {
    title: "Blogs",
    icon: "mdi:cards-heart-outline",
    router: ROUTERS.BLOGS,
  },
  {
    title: "Stores",
    icon: "mdi:local-grocery-store",
    router: ROUTERS.STORES,
  },
];
