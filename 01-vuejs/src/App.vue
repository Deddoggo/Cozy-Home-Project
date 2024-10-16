<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>
<script lang="ts" setup>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import { onMounted } from "vue";
import { useAppStore } from "./stores/appStore";

const appStore = useAppStore();

onMounted(() => {
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      appStore.hiddenDrawer();
    }
  });
});
</script>
