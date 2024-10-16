<template>
  <HeaderLayout></HeaderLayout>
  <slot />
  <FooterLayout></FooterLayout>
</template>
<script lang="ts" setup>
import HeaderLayout from "./components/HeaderLayout.vue";
import FooterLayout from "./components/FooterLayout.vue";
</script>
