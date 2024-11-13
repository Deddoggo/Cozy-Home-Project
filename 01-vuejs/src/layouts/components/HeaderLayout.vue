<template>
  <header class="ease-linear transition-colors duration-400 bg-white w-full z-20 sticky top-0">
    <div class="flex justify-between items-center px-[30px] h-[60px] md:h-[100px]">
      <!-- Logo -->
      <FurniroLogo class="w-[100px] md:w-[140px] cursor-pointer" @click="redirectTo(ROUTERS.HOME)" />

      <!-- Hamburger Menu for Mobile -->
      <button @click="toggleDrawer" class="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none">
        <Icon icon="mdi:menu" class="text-[24px]" />
      </button>

      <!-- Navigation Menu -->
      <nav class="hidden md:flex space-x-[30px] lg:space-x-[60px]">
        <a v-for="menu in HEADERS_MENU" :key="menu.title" :href="menu.router"
          class="text-[16px] font-semibold text-black hover:text-primary"
          :class="{ 'text-primary': activeRoute(menu.router) }">
          {{ menu.title }}
        </a>
      </nav>

      <!-- Header Icons -->
      <div class="hidden md:flex items-center space-x-[30px] lg:space-x-[60px]">
        <a v-for="icon in HEADERS_ICON" :key="icon.icon" :href="icon.router"
          class="text-gray-700 hover:text-gray-900 relative" @click.prevent="toggleCartPopUp(icon.title)">
          <Icon class="text-back text-[20px] lg:text-[28px]" :icon="icon.icon" />
          <!-- Quantity badge for "Stores" icon only -->
          <span v-if="icon.title === 'Stores'"
            class="absolute top-[-16px] right-[-19px] bg-primary w-[25px] h-[25px] rounded-full flex justify-center items-center text-white">
            2
          </span>
        </a>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div v-if="showDrawer"
      class="md:hidden bg-white shadow-lg absolute top-[60px] left-0 right-0 px-[30px] py-[20px] space-y-4">
      <a v-for="menu in HEADERS_MENU" :key="menu.title" :href="menu.router"
        class="block text-[16px] font-semibold text-black hover:text-primary"
        :class="{ 'text-primary': activeRoute(menu.router) }">
        {{ menu.title }}
      </a>
      <div class="flex items-center space-x-[20px]">
        <a v-for="icon in HEADERS_ICON" :key="icon.icon" :href="icon.router" class="text-gray-700 hover:text-gray-900"
          @click.prevent="toggleCartPopUp(icon.title)">
          <span v-if="icon.title === 'Stores'"
            class="bg-primary w-[25px] h-[25px] rounded-full flex justify-center items-center text-white">
            0
          </span>
          <Icon class="text-back text-[20px]" :icon="icon.icon" />
        </a>
      </div>
    </div>
  </header>

  <!-- Cart PopUp -->
  <CartPopUp v-if="showCartPopUp" @close="toggleCartPopUp('Stores')" />
</template>

<script lang="ts" setup>
import FurniroLogo from "@/components/common/FurniroLogo.vue";
import CartPopUp from "@/components/CartPopUp.vue";
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
import { useAppStore } from "@/stores/appStore";
import { useRoute, useRouter } from "vue-router";
import { HEADERS_MENU, HEADERS_ICON } from "@/shares/config/header";
import { ROUTERS } from "@/shares/config/router";

const appStore = useAppStore();
const showDrawer = ref(false); // State for mobile drawer
const showCartPopUp = ref(false);
const router = useRouter();
const route = useRoute();

const activeRoute = (url: string) => route.path === url;
const toggleDrawer = () => showDrawer.value = !showDrawer.value; // Toggle drawer
const redirectTo = (url: string) => router.push(url);

// Toggle CartPopUp visibility only when clicking the "Stores" icon
const toggleCartPopUp = (iconTitle: string) => {
  if (iconTitle === "Stores") {
    showCartPopUp.value = !showCartPopUp.value;
  }
};
</script>
