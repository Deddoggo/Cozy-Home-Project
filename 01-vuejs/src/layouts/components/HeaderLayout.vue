<template>
  <header
    class="flex justify-between items-center bg-white h-[60px] md:h-[100px] px-[30px]"
  >
    <FurniroLogo class="w-[100px] md:w-[140px]" />
    <nav class="hidden md:flex space-x-[30px] lg:space-x-[60px]">
      <a
        href="#"
        class="text-[16px] font-semibold text-black hover:text-primary"
      >
        Home
      </a>
      <a
        href="#"
        class="text-[16px] font-semibold text-black hover:text-primary"
      >
        Shop
      </a>
      <a
        href="#"
        class="text-[16px] font-semibold text-black hover:text-primary"
      >
        About
      </a>
      <a
        href="#"
        class="text-[16px] font-semibold text-black hover:text-primary"
      >
        Contact
      </a>
    </nav>
    <div class="hidden md:flex items-center space-x-[30px] lg:space-x-[60px]">
      <a href="#" class="text-gray-700 hover:text-gray-900">
        <Icon
          class="text-back text-[20px] lg:text-[28px]"
          icon="mdi:user-warning-outline"
        />
      </a>
      <a href="#" class="text-gray-700 hover:text-gray-900">
        <Icon class="text-back text-[20px] lg:text-[28px]" icon="mdi:search" />
      </a>
      <a href="#" class="text-gray-700 hover:text-gray-900">
        <Icon
          class="text-back text-[20px] lg:text-[28px]"
          icon="mdi:cards-heart-outline"
        />
      </a>
      <a href="#" class="text-gray-700 hover:text-gray-900">
        <Icon
          class="text-back text-[20px] lg:text-[28px]"
          icon="mdi:local-grocery-store"
        />
      </a>
    </div>
    <button
      class="md:hidden rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      @click="toogleDrawer"
    >
      <Icon class="text-back text-[20px]" icon="mdi:menu" />
    </button>
  </header>
  <DrawerHeader />
</template>

<script lang="ts" setup>
import FurniroLogo from "@/components/common/FurniroLogo.vue";
import { Icon } from "@iconify/vue";
import DrawerHeader from "./DrawerHeader.vue";
import { useAppStore } from "@/stores/appStore";

const appStore = useAppStore();

const toogleDrawer = () => {
  appStore.toogleDrawer();
};
</script>
