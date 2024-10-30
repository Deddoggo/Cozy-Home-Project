import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  InputCreateCategory,
  InputUpdateCategory,
  Category,
} from "../services/categories/types";
import type {
  InputCreateItem,
  InputUpdateItem,
  ShopItem,
} from "../services/shopItems/types";

import type { APIResponse } from "../services/types";
import { AxiosError } from "axios";
import type { Input } from "postcss";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      isShowDrawer: false,
    };
  },
  actions: {
    toggleDrawer() {
      this.isShowDrawer = !this.isShowDrawer;
    },
    hiddenDrawer() {
      this.isShowDrawer = false;
    },
  },
});

export const useCategoryStore = defineStore("categoryStore", () => {
  const categories = ref<Category[]>([]);

  function initCategories(data: Category[]) {
    categories.value = data;
  }

  function addNewCategory(category: Category) {
    categories.value.push(category);
  }

  function removeCategory(id: string) {
    const idx = categories.value.findIndex(s => s._id === id);
    if (idx === -1) return;
    categories.value.splice(idx, 1);
  }

  return {
    categories,
    initCategories,
    removeCategory,
  };
});

export const useShopItemStore = defineStore("shopItemStore", () => {
  const shopItems = ref<ShopItem[]>([]);

  function initShopItems(data: ShopItem[]) {
    shopItems.value = data;
  }

  function addNewShopItem(shopItem: ShopItem) {
    shopItems.value.push(shopItem);
  }

  function removeShopItem(id: string) {
    const idx = shopItems.value.findIndex(s => s._id === id);
    if (idx === -1) return;
    shopItems.value.splice(idx, 1);
  }

  return {
    shopItems,
    initShopItems,
    removeShopItem,
  };
});
