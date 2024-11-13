<template>
  <div class="h-24 bg-secondary flex items-center overflow-hidden">
    <div class="mx-auto max-w-screen-xl flex flex-wrap justify-center items-center space-x-3">
      <router-link to="/" class="text-gray-light font-normal text-lg sm:text-xl">Home</router-link>
      <span class="text-black">></span>
      <router-link to="/shop" class="text-gray-light text-lg sm:text-xl">Shop</router-link>
      <span class="text-black">></span>
      <span class="text-black text-lg sm:text-xl">{{ itemTitle || 'Loading...' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShopItemsService } from "@/services/shopItems/index";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const itemTitle = ref<string | null>(null);
const route = useRoute(); // Access the route to get the id
const shopItemService = new ShopItemsService();

const fetchProduct = async () => {
  try {
    const id = route.params.id as string; // Retrieve id from route params
    const { data, status } = await shopItemService.getShopItem(id);
    console.log("API Status:", status);
    console.log("API Data:", data);

    // Check if response is successful and has the expected data
    if (status === 200 && data && data.title) {
      itemTitle.value = data.title; // Assign title to itemTitle ref
    } else {
      console.error("API response is not as expected:", data);
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

// Fetch product details on component mount
onMounted(() => {
  fetchProduct();
});
</script>
