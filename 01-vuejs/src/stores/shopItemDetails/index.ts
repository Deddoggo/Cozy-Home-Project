import { defineStore } from "pinia";
import { ref } from 'vue';
import type { ShopItemDetail } from "@/services/shopItemDetails/types"; 

export const useShopItemDetailStore = defineStore("shopItemDetailStore", () => {

  const shopItemDetails = ref<ShopItemDetail[]>([]);

  function initShopItemDetails(data: ShopItemDetail[]) {
    shopItemDetails.value = data;
  }

  function removeShopItemDetails(id: string) {
    const idx = shopItemDetails.value.findIndex(s => s._id === id);
    if (idx === -1) return;
    shopItemDetails.value.splice(idx , 1);
  }

  return {
    shopItemDetails,
    initShopItemDetails,
    removeShopItemDetails,
  };
});