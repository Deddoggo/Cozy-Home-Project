<script setup lang="ts">
import myImage from '@/assets/images/banner.jpg';
import NewArrival from './NewArrival.vue';
</script>

<template>
  <div class="relative w-full pb-[49.25%] overflow-hidden">
    <img :src="myImage" alt="Product Image" class="absolute top-0 left-0 w-full h-full object-cover">
    <NewArrival/>
  </div>
  
</template>
