<template>
  <div class="relative w-full h-[670px] box-border m-0 bg-[#fcf8f3] py-11 overflow-hidden">
    <div class="grid grid-cols-12 box-border m-0 p-0">
      <div class="col-span-12 grid grid-cols-12 items-center">
        <div id="slider-col" class="col-span-5 max-[1200px]:col-span-12 max-[1200px]:mb-12 max-[1200px]:text-center">
          <div class="pl-24 max-[1200px]:pl-0">
            <h2 class="text-zinc-600 font-bold text-5xl mt-0 mb-2 max-[1200px]:text-4xl max-[596px]:text-2xl">
              50+ Beautiful rooms inspiration
            </h2>
            <p class="text-base font-medium mb-6 max-[655px]:text-sm max-[576px]:mb-2">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <button
              class="bg-primary text-white px-3 md:px-1 py-3 md:py-3 uppercase font-semibold border-2 border-primary transition duration-500 ease-in-out hover:bg-white hover:text-primary"
            >
              <a href="/" class="px-4 py-2 text-base max-[992px]:py-2 max-[992px]:px-7">Explore More</a>
            </button>
          </div>
        </div>
        <div id="slider-col" class="col-span-7 m-0 p-0 box-border max-[1200px]:col-span-12">
          <swiper
            :slides-per-view="3"
            :space-between="20"
            loop
            autoplay
            @slideChange="onSlideChange"
            class="swiper-container"
          >
            <swiper-slide v-for="(slide, index) in slides" :key="index">
              <img src="../../assets/images/Rectangle 24.png" alt="Furniro" />
              <div v-if="index === activeIndex" class="absolute block bottom-5 left-7 z-[4] cursor-pointer m-0 p-0">
                <div class="flex items-end m-0 p-0">
                  <div class="bg-white py-5 px-3 flex flex-col items-start gap-3 m-0">
                    <div>
                      <div class="flex items-center">
                        <span class="text-gray font-medium relative text-base">01 -</span>
                        <span class="text-gray font-medium relative text-base"> Bed Room</span>
                      </div>
                      <h3 class="text-black font-semibold text-3xl">Inner Peace</h3>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';

const activeIndex = ref(0);

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex;
}

// Mock slide data
const slides = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: 'Inner Peace',
  subtitle: '01 - Bed Room',
}));
</script>

<style scoped>
.swiper-slide img {
  height: 486px;
}

.swiper-slide-active img {
  height: 580px;
}
</style>
