<template>
  <div id="ShopSection" class="">
    <!-- Filter Bar Section -->
    <div id="SectionTop" class="bg-secondary py-8">
      <div id="Container" class="px-5">
        <div id="ComponentsSection" class="flex-wrap -mx-3 flex justify-center items-center  lg:flex lg:justify-center lg:items-center">
          <div id="FilterSection" class="flex gap-6 items-center flex-wrap lg:mb-0 lg:content-start lg:flex-grow-0 lg:flex-shrink-0 lg:w-1/2 pl-5">
            <div id="FilterButton" @click="toggleFilterVisibility" class="gap-4 items-center flex">
              <button class="bg-primary text-white py-2 px-4 rounded filter-button flex place-items-center font-medium ">
                <img src="https://www.furniro.tech/assets/filter-icon-ae3ca08c.svg" alt="Filter Icon" class="cursor-pointer align-middle" />
                Filter
              </button>
            </div>
            <div id="GridButton" class="cursor-pointer">
                <img src="https://www.furniro.tech/assets/grid-icon-4010b7aa.svg" alt="Grid Icon" class="align-middle" />
            </div>
            <div id="LayoutButton" class="cursor-pointer">
              <img src="https://www.furniro.tech/assets/view-list-icon-dacb7c6e.svg" alt="Layout Icon" class="align-middle" />
            </div>
            <div id="ProductCount" class="border-l-2 border-solid pl-9">
              Showing {{ startResult }}-{{ endResult }} of {{ totalProducts || 0 }} results
            </div>
          </div>
          <div id="ShowSection" class="gap-9 lg:justify-end items-center flex-wrap flex lg:w-1/2 lg:flex-shrink-0 lg:flex-grow-0 pr-5">
            <div id="ShowWrapper" class="">
              <form id="ShowForm" class="gap-4 flex items-center space-x-1">
                <label for="itemsPerPage" class="text-gray-700">Show</label>
                <select
                  id="itemsPerPage"
                  v-model="itemsPerPage"
                  @change="changeItemsPerPage"
                  class="border border-gray-300 px-2 py-1 rounded"
                >
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="16">16</option>
                </select>
              </form>
            </div>
            <div id="SortWrapper" class="flex items">
              <form class="gap-4 flex items-center space-x-1">
                <label for="sortBy" class="text-gray-700">Sort by</label>
                <select
                  id="sortBy"
                  v-model="sortOption"
                  @change="fetchProducts"
                  class="border border-gray-300 px-2 py-1 rounded"
                >
                  <option value="default">Default</option>
                  <option value="basePrice">Price: Low to High</option>
                  <option value="-basePrice">Price: High to Low</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isFilterVisible" class="mb-4">
      <input
        v-model="searchQuery"
        placeholder="Search products"
        @input="fetchProducts"
        class="border border-gray-300 px-4 py-2 rounded w-full"
      />
    </div>

    <!-- Product Listing -->
    <div v-if="isLoading" class="text-center">Loading products...</div>

    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        <div
          v-for="product in visibleProducts"
          :key="product._id"
          class="p-4 rounded-lg bg-background shadow-lg"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 class="text-xl font-medium">{{ product.title }}</h3>
          <p class="text-gray-500 mb-2">{{ product.description }}</p>
          <p class="text-lg font-semibold">$ {{ product.basePrice }}</p>
        </div>
      </div>

      <div class="my-6 flex justify-center items-center space-x-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{
            'bg-primary text-white': page === currentPage,
            'bg-gray-200': page !== currentPage
          }"
          class="pagination-button w-10 h-10 border border-gray-300 rounded flex justify-center items-center cursor-pointer"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
  <div id="Features" class=" bg-secondary py-20 px-0 w-full box-border m-0 block">
    <div id="FeaturesContainer" class="w-[90%] mx-auto grid gap-5 p-0 box-border sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div id="Item1" class="items-center gap-4 flex lg:mb-0">
            <div class="m-0 p-0 box-border block">
              <img src="@/assets/icons/trophy 1.svg" alt="Furniro">
            </div>
            <div id="Content Wrapper" class="m-0 p-0 box-border block">
                <h3 class="text-black text-2xl font-semibold h-9"> High Quality </h3>
                <span class="text-gray text-xl font-medium h-8">crafted from top materials</span>
            </div>
        </div>
        <div id="Item2" class="items-center gap-4 flex lg:mb-0">
            <div class="m-0 p-0 box-border block">
              <img src="@/assets/icons/guarantee.svg" alt="Furniro">
            </div>
            <div id="Content Wrapper" class="m-0 p-0 box-border block">
                <h3 class="text-black text-2xl font-semibold h-9 m-0"> 2-Year Guarantee </h3>
                <span class="text-gray text-xl font-medium h-8">Over 2 years</span>
            </div>
        </div>
        <div id="Item3" class="items-center gap-4 flex lg:mb-0">
            <div class="m-0 p-0 box-border block">
              <img src="@/assets/icons/shipping.svg" alt="Furniro">
            </div>
            <div id="Content Wrapper" class="m-0 p-0 box-border block">
                <h3 class="text-black text-2xl font-semibold h-9 m-0"> Free Shipping </h3>
                <span class="text-gray text-xl font-medium h-8">On orders over $150</span>
            </div>
        </div>
        <div id="Item4" class="items-center gap-4 flex lg:mb-0">
            <div class="m-0 p-0 box-border block">
              <img src="@/assets/icons/customer-support.svg" alt="Furniro">
            </div>
            <div id="Content Wrapper" class="m-0 p-0 box-border block">
                <h3 class="text-black text-2xl font-semibold h-9 m-0"> Customer Support </h3>
                <span class="text-gray text-xl font-medium h-8">Dedicated support</span>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

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
const searchQuery = ref("");

// Toggle state for filter visibility
const isFilterVisible = ref(false);

const toggleFilterVisibility = () => {
  isFilterVisible.value = !isFilterVisible.value;
};

const startResult = computed(() => {
  return totalProducts.value > 0 ? (currentPage.value - 1) * itemsPerPage.value + 1 : 0;
});

const endResult = computed(() => {
  return totalProducts.value > 0
    ? Math.min(startResult.value + itemsPerPage.value - 1, totalProducts.value)
    : 0;
});

const fetchProducts = async () => {
  isLoading.value = true;
  try {
    // Build query parameters based on filters, sorting, and search query
    const queryParams = new URLSearchParams({
      title: searchQuery.value || "",  // Apply search query
      current: currentPage.value.toString(),
      pageSize: itemsPerPage.value.toString(),
      sort: sortOption.value !== "default" ? sortOption.value : ""
    });

    const response = await fetch(`http://localhost:8080/api/v1/shop-items?${queryParams}`);
    const data = await response.json();

    products.value = data.results;  
    totalProducts.value = data.totalItems;
    totalPages.value = data.totalPages;     
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
  fetchProducts();  
};

const changeItemsPerPage = () => {
  currentPage.value = 1;
  fetchProducts();  
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.pagination-button {
  transition: background-color 0.3s ease;
}

.pagination-button:hover {
  background-color: rgba(184, 142, 47, 0.8);
}

.filter-button {
  transition: background-color 0.3s ease;
}

.filter-button:hover {
  background-color: rgba(184, 142, 47, 0.8);
}
</style>
