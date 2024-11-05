<template>
  <HeaderLayout></HeaderLayout>
  <slot />
  <FooterLayout></FooterLayout>
</template>
<script lang="ts" setup>
import HeaderLayout from "@/layouts/components/HeaderLayout.vue";
import FooterLayout from "@/layouts/components/FooterLayout.vue";
</script>
