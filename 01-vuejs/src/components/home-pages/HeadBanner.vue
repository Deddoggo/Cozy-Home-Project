<script setup lang="ts">
import myImage from "@/assets/images/banner.jpg";
import NewArrival from "./NewArrival.vue";
import { computed, ref } from "vue";

const backGroundBannerStyles = computed(() => ({
  background: `url(${myImage})`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
}));
</script>

<template>
  <div
    class="w-full flex items-center justify-center py-[105px]"
    :style="backGroundBannerStyles"
  >
    <NewArrival />
  </div>
</template>
