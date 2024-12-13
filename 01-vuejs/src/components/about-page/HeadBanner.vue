<template>
  <div class="relative h-64 flex flex-col justify-center items-center">
    <div class="absolute inset-0 bg-cover bg-center opacity-50" :style="{ backgroundImage: `url(${imgUrl})` }">
      </div>

    <div class="relative z-10 text-center">
      <h1 class="text-4xl font-medium mb-2">About</h1>
      <h2 class="text-xl font-light">
        <router-link to="/" class="hover:text-gray-300 font-medium">Home</router-link> 
        <span class="mx-2 font-medium">></span> 
        About
      </h2> 
    </div>
  </div>
</template>

<script setup lang="ts">
  const imgUrl = new URL('@/assets/images/banner_background.jpg', import.meta.url).href
</script>

<style scoped>
.bg-cover {
  background-size: cover;
  background-position: center;
}
</style>
