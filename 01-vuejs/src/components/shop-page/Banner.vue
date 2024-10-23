<template>
  <div class="relative h-64 flex flex-col justify-center items-center">
    <div 
      class="absolute inset-0 bg-cover bg-center opacity-50"
      :style="{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEpyZf3e2pjDE49KB2h9uhhHl--HxGL0p~gOD9NMtoZTPScpd8sO4VRuwKa901LDa1uEMWU~EoY-E-bs4EX1npOsK66zVJxH5pu-bbdzlQHaekm8nQ~jmrW2pWe4U0dSn1SxSM8DQqgdHBx3tCPlZn9sniZPai17Gz8DdsuOQ-dIvAeb9IZeAAhD1VZoxJDHn5D6cd5dtqnjRUF4fegU-ogFr6zL9BX0OBbewKD3stvf62axLbXnDsxEZze1mM0IBuikfqUjI~5tYQLJTkVpL4aeenLGLK1bjT2PEOo5GSgjhb~T5~4dMA3gkqUBH3S2gAsu0CPSuLslLgyOm2S~ww__)' }"
    ></div>

    <div class="relative z-10 text-center">
      <h1 class="text-4xl font-medium mb-2">Shop</h1>
      <h2 class="text-xl font-light">
        <router-link to="/" class="hover:text-gray-300 font-medium">Home</router-link> 
        <span class="mx-2 font-medium">></span> 
        Shop
      </h2> 
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.bg-cover {
  background-size: cover;
  background-position: center;
}
</style>
