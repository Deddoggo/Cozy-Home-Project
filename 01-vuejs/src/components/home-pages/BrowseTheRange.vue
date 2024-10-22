<template>
  <div class="container mx-auto my-10">
    <h2 class="text-center text-2xl font-semibold mb-6">Browse The Range</h2>
    <p class="text-center text-gray-500 mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <div v-if="isLoading" class="text-center">
      Loading categories...
    </div>

<swiper 
  v-if="!isLoading" 
  :slides-per-view="4" 
  :space-between="20" 
  pagination 
  class="mySwiper"
>
      <swiper-slide 
        v-for="category in categories" 
        :key="category._id" 
        class="category-card p-4 border rounded-lg shadow-md"
      >
        <img 
          :src="category.image" 
          :alt="category.title" 
          class="w-full h-48 object-cover mb-4 rounded-lg" 
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

interface Category {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const categories = ref<Category[]>([]);
const isLoading = ref(true);

const fetchCategories = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/v1/categories');
    const data = await response.json();
    categories.value = data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
.category-card img {
  transition: transform 0.3s;
}
.category-card img:hover {
  transform: scale(1.05);
}
</style>
