<template>
  <header
    class="flex justify-between items-center bg-white h-[100px] px-[30px]"
  >
    <FurniroLogo />
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
    <button class="md:hidden">
      <Icon class="text-back text-[28px]" icon="mdi:menu" />
    </button>
  </header>
</template>

<script setup>
// Add any necessary script logic here
import FurniroLogo from "@/components/common/FurniroLogo.vue";
import { Icon } from "@iconify/vue";
</script>
