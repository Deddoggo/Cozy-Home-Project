<template>
  <header
    class="ease-linear transition-colors duration-400 bg-white w-full z-20 sticky top-0"
  >
    <div
      class="flex justify-between items-center px-[30px] h-[60px] md:h-[100px]"
    >
      <FurniroLogo
        class="w-[100px] md:w-[140px]"
        @click="redirectTo(ROUTERS.HOME)"
      />
      <nav class="hidden md:flex space-x-[30px] lg:space-x-[60px]">
        <a
          v-for="menu in HEADERS_MENU"
          :href="menu.router"
          class="text-[16px] font-semibold text-black hover:text-primary"
          :class="{ 'text-primary': activeRoute(menu.router) }"
          :key="menu.title"
        >
          {{ menu.title }}
        </a>
      </nav>
      <div class="hidden md:flex items-center space-x-[30px] lg:space-x-[60px]">
        <a
          v-for="icon in HEADERS_ICON"
          :href="icon.router"
          class="text-gray-700 hover:text-gray-900"
          :key="icon.icon"
        >
          <Icon
            class="text-back text-[20px] lg:text-[28px]"
            :icon="icon.icon"
          />
        </a>
      </div>
      <button
        class="md:hidden rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        @click="toggleDrawer"
      >
        <Icon class="text-back text-[20px]" icon="mdi:menu" />
      </button>
      <div
        class="fixed z-20 lg:hidden w-full top-0 left-0 xl:w-auto xl:right-0 xl:left-auto h-full"
        :class="showDrawer ? '' : 'hidden'"
      >
        <div class="relative bg-white w-full h-full">
          <div class="flex justify-between items-center px-[30px] h-[60px]">
            <FurniroLogo class="w-[100px] md:w-[140px]" />
            <button
              class="md:hidden rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              @click="toggleDrawer"
            >
              <Icon class="text-back text-[20px]" icon="mdi:close" />
            </button>
          </div>
          <div class="overflow-hidden px-3 py-6">
            <div
              v-for="menu in HEADERS_MENU"
              class="w-full flex flex-col gap-2"
              :class="{ 'bg-secondary': activeRoute(menu.router) }"
              :key="menu.title"
              @click="redirectTo(menu.router)"
            >
              <button
                class="py-2 px-3 w-full font-inter text-label-small text-neutral-900 rounded hover:bg-neutral-100 focus:bg-neutral-100 flex justify-start items-center"
              >
                <span class="mr-0.5">{{ menu.title }}</span>
              </button>
            </div>
          </div>
          <div class="h-full bg-background">
            <div class="flex items-center justify-between pt-5 w-1/2 m-auto">
              <a
                v-for="icon in HEADERS_ICON"
                :href="icon.router"
                class="text-gray-700 hover:text-gray-900"
                :key="icon.icon"
              >
                <Icon
                  class="text-back text-[20px] lg:text-[28px]"
                  :icon="icon.icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import FurniroLogo from "@/components/common/FurniroLogo.vue";
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import { useAppStore } from "@/stores/appStore";
import { useRoute, useRouter } from "vue-router";
import { HEADERS_MENU, HEADERS_ICON } from "@/shares/config/header";
import { ROUTERS } from "@/shares/config/router";

const appStore = useAppStore();

const showDrawer = computed(() => appStore.isShowDrawer);

const router = useRouter();
const route = useRoute();

const activeRoute = (url: string) => {
  return route.path.includes(url);
};

const toggleDrawer = () => {
  appStore.toggleDrawer();
};

const redirectTo = (url: string) => {
  router.push(url);
};
</script>
