<script setup lang="ts">
import myImage from '@/assets/images/banner.jpg';
import NewArrival from './NewArrival.vue';
</script>

<template>
  <div class="image-container">
    <img :src="myImage" alt="Product Image" class="product-image">
    
    <NewArrival/>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 49.25%;
  overflow: hidden;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
