<template>
  <div class="mx-auto max-w-2xl pt-20 text-center">
    <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Get In Touch With Us</h2>
    <p class="mt-2 text-base leading-8 text-gray-600">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
  </div>
  <div class="flex flex-col md:flex-row px-4">
    <div class="flex-1 md:mr-2">
      <OurInfos />
    </div>
    <div class="flex-1 md:ml-2">
      <YourInfos />
    </div>
  </div>
</template>

<script setup>
  import OurInfos from '@/components/contact-page/OurInfos.vue';
  import YourInfos from '@/components/contact-page/YourInfos.vue';
</script>