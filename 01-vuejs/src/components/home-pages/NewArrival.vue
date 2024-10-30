<script setup lang="ts">
import { ROUTERS } from "@/shares/config/router";
import { useRouter } from "vue-router";

const router = useRouter();

function redirectTo(route: string) {
  router.push(route);
}
</script>

<template>
  <div class="container flex justify-center lg:justify-end mx-auto px-3 ">
    <div
      class="bg-[#FFF3E3] rounded-lg w-full max-w-[643px] px-[41px] pt-[62px] pb-[37px]"
    >
      <h6 class="mb-2 text-base font-semibold tracking-[0.25em]">New Arrival</h6>
      <h1 class="text-primary text-[30px] md:text-[52px] font-bold">Discover Our <br />New Collection</h1>
      <p class="m-0 mb-4 text-base font-medium leading-6 text-[#333333]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <button
        @click="redirectTo(ROUTERS.SHOP)"
        class=" duration-500 delay-0 ease-out transition-colors w-full max-w-[200px] h-[50px] py-4 bg-[#B88E2F] text-white font-bold text-base rounded-lg cursor-pointer hover:bg-white hover:text-[#B88E2F] hover:border-2 hover:border-[#B88E2F]"
      >
        BUY NOW
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>