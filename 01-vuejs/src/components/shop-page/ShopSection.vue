<template>
  <div class="container mx-auto my-10">
    <div class="flex justify-between items-center mb-4">
      <div class="flex space-x-4">
        <img src="https://www.furniro.tech/assets/filter-icon-ae3ca08c.svg" />
        <button>Filter</button>
        <img src="https://www.furniro.tech/assets/grid-icon-4010b7aa.svg" />
        <img src="https://www.furniro.tech/assets/view-list-icon-dacb7c6e.svg" />
      </div>

      <p class="text-gray-600">
        Showing {{ startResult }}-{{ endResult }} of {{ totalProducts }} results
      </p>

      <div class="flex space-x-4 items-center">
        <label for="itemsPerPage">Show</label>
        <select
          id="itemsPerPage"
          v-model="itemsPerPage"
          @change="changeItemsPerPage"
          class="border px-2 py-1 rounded"
        >
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>

        <label for="sortBy">Sort by</label>
        <select
          id="sortBy"
          v-model="sortOption"
          @change="fetchProducts"
          class="border px-2 py-1 rounded"
        >
          <option value="default">Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>
    </div>

    <div v-if="isLoading" class="text-center">Loading products...</div>

    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="product in visibleProducts"
          :key="product._id"
          class="product-card p-4 rounded-lg bg-background"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-48 object-cover mb-4"
          />
          <h3 class="text-xl font-medium">{{ product.title }}</h3>
          <p class="text-gray-500 mb-2">{{ product.description }}</p>
          <p class="text-lg font-semibold">$ {{ product.basePrice }}</p>
        </div>
      </div>

      <div class="mt-6 flex justify-center items-center space-x-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{ active: page === currentPage }"
          class="pagination-button"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";

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
const itemsPerPage = ref(8);
const currentPage = ref(1);
const totalProducts = ref(0);
const totalPages = ref(0);
const sortOption = ref("default");
const searchQuery = ref(""); // If you have search or filter queries

const startResult = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const endResult = computed(() =>
  Math.min(startResult.value + itemsPerPage.value - 1, totalProducts.value)
);

const fetchProducts = async () => {
  isLoading.value = true;
  try {
    const queryParams = new URLSearchParams({
      query: searchQuery.value, // Adjust this based on filter criteria
      current: currentPage.value.toString(),
      pageSize: itemsPerPage.value.toString(),
      sort: sortOption.value // Include the sort option in the query
    });

    const response = await fetch(`http://localhost:8080/api/v1/shop-items?${queryParams}`);
    const data = await response.json();

    products.value = data.results;  // Updated to use results from the backend
    totalProducts.value = data.totalItems;  // Update based on backend response
    totalPages.value = data.totalPages;     // Total pages calculated on backend
    updateVisibleProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    isLoading.value = false;
  }
};

const updateVisibleProducts = () => {
  visibleProducts.value = products.value;
};

const changePage = (page: number) => {
  currentPage.value = page;
  fetchProducts();  // Fetch products for the selected page
};

const changeItemsPerPage = () => {
  currentPage.value = 1;
  fetchProducts();  // Refetch products when items per page change
};

onMounted(() => {
  fetchProducts();
});

watch([itemsPerPage, currentPage], () => {
  fetchProducts();
});
</script>

<style scoped>
.pagination-button {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pagination-button.active {
  background-color: #b88e2f;
  color: #fff;
}

.filter-button {
  padding: 0.5rem 1rem;
  background-color: #b88e2f;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.view-toggle-button {
  padding: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
}

.view-toggle-button:hover {
  background-color: #e0e0e0;
}
</style>
