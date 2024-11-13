<template>
  <div>
    <!-- Chỉ hiện Header nếu không ở trang login hoặc register -->
    <HeaderLayout v-if="!isAuthPage" />
    <slot />
    <FooterLayout v-if="!isAuthPage" />
  </div>
</template>

<script lang="ts" setup>
import HeaderLayout from "@/layouts/components/HeaderLayout.vue";
import FooterLayout from "@/layouts/components/FooterLayout.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

// Sử dụng route để kiểm tra đường dẫn hiện tại
const route = useRoute();
const isAuthPage = ref(route.path === "/login" || route.path === "/register");

// Lắng nghe sự thay đổi của route.path và cập nhật isAuthPage
watch(
  () => route.path,
  (newPath) => {
    isAuthPage.value = newPath === "/login" || newPath === "/register";
  }
);
</script>
