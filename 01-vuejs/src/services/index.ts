//services/index.ts
import categoryController from "./categories";
import shopItemController from "./shopItems";

export const API = {
  categories: categoryController,
  shopItems: shopItemController,
};