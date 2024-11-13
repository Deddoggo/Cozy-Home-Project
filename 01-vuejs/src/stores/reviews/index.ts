import { defineStore } from "pinia";
import { ref } from 'vue';
import type { Review } from "@/services/reviews/types"; 

export const useReviewStore = defineStore("reviewStore", () => {

  const reviews = ref<Review[]>([]);

  function initReviews(data: Review[]) {
    reviews.value = data;
  }

  function removeReviews(id: string) {
    const idx = reviews.value.findIndex(s => s._id === id);
    if (idx === -1) return;
    reviews.value.splice(idx , 1);
  }

  return {
    reviews,
    initReviews,
    removeReviews,
  };
});