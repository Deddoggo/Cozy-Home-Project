import { defineStore } from "pinia";
import { ref } from 'vue';
import type { ShopItem } from "../../services/shopItems/types";

export const useShopItemStore = defineStore("shopItemStore", () => {

  const shopItems = ref<ShopItem[]>([]);

  function initShopItems(data: ShopItem[]) {
    shopItems.value = data;
  }

  function removeShopItem(id: string) {
    const idx = shopItems.value.findIndex(s => s._id === id);
    if (idx === -1) return;
    shopItems.value.splice(idx , 1);
  }

  return {
    shopItems,
    initShopItems,
    removeShopItem,
  };
});