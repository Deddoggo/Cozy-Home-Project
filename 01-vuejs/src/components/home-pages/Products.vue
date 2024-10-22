<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ROUTERS } from '@/shares/config/router';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectTo(route: string) {
  router.push(route);
}

interface ShopItem {
  _id: string;
  title: string;
  description: string;
  basePrice: number;
  image: string;
}

const products = ref<ShopItem[]>([]);
const visibleProducts = ref<ShopItem[]>([]);
const isLoading = ref(true);
const itemsToShow = ref(8);

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/v1/shop-items');
    const data = await response.json();
    products.value = data;
    visibleProducts.value = products.value.slice(0, itemsToShow.value);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="container mx-auto my-10">
    <h2 class="text-center text-2xl font-semibold mb-6">Our Products</h2>

    <div v-if="isLoading" class="text-center">Loading products...</div>

    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="product in visibleProducts" :key="product._id" class="product-card p-4 border rounded-lg shadow-md">
          <img 
            :src="product.image" 
            :alt="product.title" 
            class="w-full h-48 object-cover mb-4 rounded-lg" 
          />
          <h3 class="text-xl font-medium">{{ product.title }}</h3>
          <p class="text-gray-500 mb-2">{{ product.description }}</p>
          <p class="text-lg font-semibold">$ {{ product.basePrice }}</p>
        </div>
      </div>

      <div v-if="itemsToShow < products.length" class="text-center mt-6">
        <button @click="redirectTo(ROUTERS.SHOP)">
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card img {
  transition: transform 0.3s;
}
.product-card img:hover {
  transform: scale(1.05);
}

button {
  width: 100%;
  max-width: 200px;
  height: 50px;
  padding: 1rem;
  background-color: rgba(184, 142, 47, 1);
  color: rgba(255, 255, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  justify-self: unset;
}

button:hover {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(184, 142, 47, 1);
  border: 2px solid rgba(184, 142, 47, 1);
}
</style>
