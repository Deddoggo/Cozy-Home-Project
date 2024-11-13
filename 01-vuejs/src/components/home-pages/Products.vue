<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ShopItemsService } from "@/services/shopItems/index";
import { ROUTERS } from "@/shares/config/router";
import { useRouter } from "vue-router";
import type { ShopItem } from "@/services/shopItems/types";

const router = useRouter();

function redirectTo(route: string) {
  router.push(route);
}

// Ref to store the full list of products and the visible subset
const products = ref<ShopItem[]>([]);
const visibleProducts = ref<ShopItem[]>([]);
const isLoading = ref(true);
const itemsToShow = ref(8);

const shopItemService = new ShopItemsService();
const fetchProducts = async () => {
  try {
    const { data, status } = await shopItemService.getShopItems();

    // Kiểm tra nếu status là 200 và data chứa results
    if (status === 200 && Array.isArray(data.results)) {
      products.value = data.results;
      visibleProducts.value = products.value.slice(0, itemsToShow.value);
    } else {
      console.error("API response is not as expected:", data);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    isLoading.value = false;
  }
};

console.log("products", products.value);
// Fetch products on component mount
onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="container mx-auto my-10">
    <h2 class="text-center text-2xl font-semibold mb-6">Our Products</h2>

    <!-- Hiển thị thông báo khi đang tải sản phẩm -->
    <div v-if="isLoading" class="text-center">Loading products...</div>

    <!-- Kiểm tra nếu không có sản phẩm nào để hiển thị -->
    <div v-else-if="visibleProducts.length === 0" class="text-center text-gray-500">
      No products available.
    </div>

    <!-- Hiển thị sản phẩm nếu có dữ liệu -->
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="product in visibleProducts"
          :key="product._id"
          class="relative p-4 rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <h3 class="text-xl font-medium">{{ product.title }}</h3>
          <p class="text-gray-500 mb-2">{{ product.description }}</p>
          <p class="text-lg font-semibold">$ {{ product.basePrice }}</p>

          <!-- Overlay with buttons -->
          <div
            class="absolute inset-0 bg-gray bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 mt-0"
          >
            <div class="flex flex-col items-center space-y-2">
              <button class="bg-[#b88e2f] text-white font-light p-2 x-4 rounded-lg mb-2">
                Add to Cart
              </button>
              <div class="flex space-x-4">
                <div class="flex flex-col items-center">
                  <button class="bg-secondary text-[#b88e2f] p-2 rounded-full hover:bg-gray-200">
                    <i class="pi pi-share-alt"></i>
                  </button>
                  <span class="text-s text-white">Share</span>
                </div>
                <div class="flex flex-col items-center">
                  <button class="bg-secondary text-[#b88e2f] p-2 rounded-full hover:bg-gray-200">
                    <i class="pi pi-arrow-right-arrow-left"></i>
                  </button>
                  <span class="text-s text-white">Compare</span>
                </div>
                <div class="flex flex-col items-center">
                  <button class="bg-secondary text-[#b88e2f] p-2 rounded-full hover:bg-gray-200">
                    <i class="pi pi-heart"></i>
                  </button>
                  <span class="text-s text-white">Like</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nút Show More -->
      <div class="text-center mt-6">
        <button
          @click="redirectTo(ROUTERS.SHOP)"
          class="w-full max-w-xs h-12 px-4 bg-[#b88e2f] text-white font-bold rounded-lg transition-colors duration-300 hover:bg-white hover:text-[#b88e2f] hover:border-2 hover:border-[#b88e2f]"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
