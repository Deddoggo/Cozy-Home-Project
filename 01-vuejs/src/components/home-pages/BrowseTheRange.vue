<template>
  <div class="container mx-auto my-10">
    <h2 class="text-center text-2xl font-semibold mb-6">Browse The Range</h2>
    <p class="text-center text-gray-500 mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <!-- Display loading text while fetching categories -->
    <div v-if="isLoading" class="text-center">
      Loading categories...
    </div>

    <!-- Swiper to display categories after loading -->
    <swiper 
      v-if="!isLoading" 
      :slides-per-view="3" 
      :space-between="20" 
      pagination 
      class="mySwiper"
    >
      <swiper-slide 
        v-for="category in categories" 
        :key="category._id" 
        class="category-card p-4"
      >
        <img 
          :src="category.image" 
          :alt="category.title" 
          class="w-full h-60 object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105" 
        />
        <h3 class="text-xl font-medium text-center">{{ category.title }}</h3>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { CategoriesService } from '@/services/categories';
import type { Category } from '@/services/categories/types';

// Refs for category data and loading status
const categories = ref<Category[]>([]);
const isLoading = ref(true);

// Service instance for fetching categories
const categoriesService = new CategoriesService();
const fetchCategories = async () => {
  try {
    const { data, status } = await categoriesService.getCategories();
    console.log("API Status:", status);
    console.log("API Data:", data);

    // Kiểm tra nếu data trả về là một mảng (dùng cho categories)
    if (status === 200 && Array.isArray(data)) {
      categories.value = data;
    } else {
      console.error("API response is not as expected:", data);
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  } finally {
    isLoading.value = false;
  }
};

// Fetch categories on component mount
onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
.category-card {
  transition: transform 0.3s;
}

.category-card:hover {
  transform: scale(1.05);
}
</style>
