<template>
  <div
    class="w-full absolute top-14 md:hidden"
    :class="showDrawer ? '' : 'hidden'"
  ></div>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores/appStore";
import { computed } from "vue";

const appStore = useAppStore();

const showDrawer = computed(() => appStore.isShowDrawer);
</script>
