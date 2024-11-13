<template>
  <div class="w-[1440px] h-[744px] relative">
    <!-- Background and Borders -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="border-t border-gray-light w-full"></div>

    <!-- Tabs -->
    <div class="absolute w-[649px] h-9 left-[396px] top-[48px] flex justify-between font-['Poppins'] text-2xl">
      <div @click="selectTab('description')"
        :class="{ 'text-black font-medium': selectedTab === 'description', 'text-[#9f9f9f] font-normal': selectedTab !== 'description' }">
        Description
      </div>
      <div @click="selectTab('additionalInfo')"
        :class="{ 'text-black font-medium': selectedTab === 'additionalInfo', 'text-[#9f9f9f] font-normal': selectedTab !== 'additionalInfo' }">
        Additional Information
      </div>
      <div @click="selectTab('reviews')"
        :class="{ 'text-black font-medium': selectedTab === 'reviews', 'text-[#9f9f9f] font-normal': selectedTab !== 'reviews' }">
        Reviews [5]
      </div>
    </div>

    <!-- Description Text -->
    <div
      class="absolute left-[207px] top-[121px] w-[1026px] space-y-4 font-['Poppins'] text-justify text-[#9f9f9f] text-base">
      <div v-if="selectedTab === 'description'">
        <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
          unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar
          as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced
          audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The
          analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced
          leather strap enables easy and stylish travel.</p>
        <div class="flex space-x-8">
          <!-- First Image Container -->
          <div class="relative w-[605px] h-[348px] bg-[#f9f1e7] rounded-[10px] overflow-hidden">
            <img
              class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full object-cover"
              src="../../assets/images/sofa/917ac944454e358f73d0af67e1f1b74e.png" alt="Product Image 1" />
          </div>

          <!-- Second Image Container -->
          <div class="relative w-[605px] h-[348px] bg-[#f9f1e7] rounded-[10px] overflow-hidden">
            <img
              class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full object-cover"
              src="../../assets/images/sofa/3f5927c3cf50e945c3e0f03b3206e810.png" alt="Product Image 2" />
          </div>
        </div>
      </div>
      <div v-if="selectedTab === 'additionalInfo'" class="space-y-2">
        <div>SKU: SS001</div>
        <div>Category: Sofas</div>
        <div>Tags: Sofa, Chair, Home, Shop</div>
      </div>

      <div v-if="selectedTab === 'reviews'" class="space-y-2">
        <p>No reviews yet.</p>
        <!-- You can add a component or list for reviews here -->
      </div>
    </div>

    <!-- Bottom Border -->
    <div class="absolute bottom-0 border-t border-[#d9d9d9] w-full"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedTab = ref('description');

const selectTab = (tab) => {
  selectedTab.value = tab;
};
</script>

<style>
/* Optional: Import Poppins font if needed */
</style>
