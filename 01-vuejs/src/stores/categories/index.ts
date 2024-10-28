import { defineStore } from "pinia";
import { ref } from 'vue';
import type { Category } from "../../services/categories/types";

export const useCategoryStore = defineStore("categoryStore", () => {

  const categories = ref<Category[]>([]);

  function initCategories(data: Category[]) {
    categories.value = data;
  }

  function removeCategory(id: string) {
    const idx = categories.value.findIndex(s => s._id ===id);
    if (idx === -1) return;
    categories.value.splice(idx , 1);
  }

  return {
    categories,
    initCategories,
    removeCategory,
  };
});