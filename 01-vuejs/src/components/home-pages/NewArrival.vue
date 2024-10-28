<script setup lang="ts">
import { ROUTERS } from '@/shares/config/router';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectTo(route: string) {
  router.push(route);
}
</script>

<template>
  <div class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FFF3E3] p-8 text-[#333333] font-poppins w-[42vw] h-[60vh] rounded-lg flex flex-col justify-center">
    <p class="font-bold text-xl tracking-wider">New Arrival</p>
    <h2 class="mt-0 mb-4 text-3xl font-bold leading-tight text-[#B88E2F]">Discover Our <br/> New Collection</h2>
    <p class="m-0 mb-4 text-base font-medium leading-6 text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button @click="redirectTo(ROUTERS.SHOP)" class="w-full max-w-[200px] h-[50px] py-4 bg-[#B88E2F] text-white font-bold text-base rounded-lg cursor-pointer hover:bg-white hover:text-[#B88E2F] hover:border-2 hover:border-[#B88E2F]">
      BUY NOW
    </button>
  </div>
</template>
