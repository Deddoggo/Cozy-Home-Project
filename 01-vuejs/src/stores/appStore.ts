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
import { API } from "../services";
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
    const idx = categories.value.findIndex((s) => s._id === id);
    if (idx === -1) return;
    categories.value.splice(idx, 1);
  }

  async function dispatchGetCategories(): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.categories.getCategories();
      if (status === 200) {
        initCategories(data.content);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchCreateCategory(
    input: InputCreateCategory
  ): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.categories.createCategory(input);
      if (status === 200) {
        addNewCategory(data.content);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchDeleteCategory(id: string): Promise<APIResponse<null>> {
    try {
      const { status } = await API.categories.deleteCategory(+id);
      if (status === 200) {
        removeCategory(id);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchUpdateCategory(
    input: InputUpdateCategory
  ): Promise<APIResponse<null>> {
    try {
      const { status } = await API.categories.updateCategory(input);
      if (status === 200) {
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  return {
    categories,
    initCategories,
    removeCategory,
    dispatchGetCategories,
    dispatchCreateCategory,
    dispatchDeleteCategory,
    dispatchUpdateCategory,
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
    const idx = shopItems.value.findIndex((s) => s._id === id);
    if (idx === -1) return;
    shopItems.value.splice(idx, 1);
  }

  async function dispatchGetShopItems(): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.shopItems.getShopItems();
      if (status === 200) {
        initShopItems(data.content);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchCreateShopItem(
    input: InputCreateItem
  ): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.shopItems.createShopItem(input);
      if (status === 200) {
        addNewShopItem(data.content);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchDeleteShopItem(id: string): Promise<APIResponse<null>> {
    try {
      const { status } = await API.shopItems.deleteShopItem(+id);
      if (status === 200) {
        removeShopItem(id);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchUpdateShopItem(
    input: InputUpdateItem
  ): Promise<APIResponse<null>> {
    try {
      const { status } = await API.shopItems.updateShopItem(input);
      if (status === 200) {
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  return {
    shopItems,
    initShopItems,
    removeShopItem,
    dispatchGetShopItems,
    dispatchCreateShopItem,
    dispatchDeleteShopItem,
    dispatchUpdateShopItem,
  };
});