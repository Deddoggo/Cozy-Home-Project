<script setup lang="ts">
import { HEADERS_MENU } from "@/shares/config/header";
</script>

<template>
  <footer class="border-t-2 border-t-[rgba(0,0,0,0.17)]">
    <div class="py-[80px] m-auto">
      <div
        class="flex flex-wrap justify-between border-b-2 border-b-[rgba(0,0,0,0.17)]"
      >
        <div class="w-full md:w-1/4 mb-4">
          <h1 class="text-2xl font-bold mb-10">Funiro.</h1>
          <p class="text-gray md:w-[285px]">
            400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA
          </p>
        </div>
        <div class="w-full md:w-1/4 mb-4">
          <h2 class="font-semibold text-gray mb-10">Links</h2>
          <ul class="list-none">
            <li
              v-for="menu in HEADERS_MENU"
              :key="menu.title"
              class="font-semibold mb-10"
            >
              {{ menu.title }}
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 mb-4">
          <h2 class="font-semibold text-gray mb-10">Help</h2>
          <ul class="list-none">
            <li class="font-semibold mb-10">Payment Options</li>
            <li class="font-semibold mb-10">Returns</li>
            <li class="font-semibold mb-10">Privacy Policies</li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 mb-4">
          <h2 class="font-semibold text-gray mb-10">Newsletter</h2>
          <div class="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              class="p-1 border-b-2 border-b-[rgba(0,0,0,0.17)] mr-2"
            />
            <button
              class="p-1 font-semibold border-b-2 border-b-[rgba(0,0,0,0.17)]"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6 text-gray-600">
        <p>2023 funiro. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Additional custom styles can go here if needed */
</style>
