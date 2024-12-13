<template>
  <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
        <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
          <div class="w-full flex-col justify-center items-start gap-8 flex">
            <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
              <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 class="text-primary text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  The Tale of Our Achievement Story
                </h2>
                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at elit nibh. Integer eu mollis nibh.
                  Nulla volutpat fermentum lacus. Vestibulum in leo et quam vehicula sollicitudin nec pretium eros. Duis
                  sed consequat nulla. Aliquam eu nibh quam. Aenean dignissim risus dolor. Donec tincidunt nulla nulla,
                  ut molestie eros scelerisque tincidunt. Mauris condimentum varius eros bibendum auctor.
                </p>
              </div>
            </div>
            <div class="w-full flex-col justify-center items-start gap-6 flex">
              <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                <div
                  class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">10+ Years</h4>
                  <p class="text-gray-500 text-base font-normal leading-relaxed">Working in the Industry with Dedication</p>
                </div>
                <div
                  class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">1250+ Products</h4>
                  <p class="text-gray-500 text-base font-normal leading-relaxed">Provided to Our Clients with Best Quality</p>
                </div>
              </div>
              <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                <div
                  class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                  <p class="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to Innovation Wins Understanding</p>
                </div>
                <div
                  class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4>
                  <p class="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on Client Satisfaction.</p>
                </div>
              </div>
            </div>
          </div>

          <button
            class="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
          >
            <span
              class="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-[0.125rem] transition-all duration-[700ms] ease-in-out">Read More</span>
            <img 
              class="w-[18px] h-[18px] ml-[0.5rem]" 
              src="https://pagedone.io/asset/uploads/1717742431.png" 
              alt="Read More" 
            />
          </button>
        </div>

        <div class="w-full lg:justify-start justify-center items-start flex">
          <div
            class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-[30px] sm:border border-gray-200 relative"
          >
            <img 
              class="sm:mt-[20px] sm:ml-[20px] w-full h-full rounded-[30px] object-cover"
              :src="BannerImage" 
              alt="About Us image" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importing the banner image from assets
import BannerImage from '@/assets/aboutPage/image1.jpg';
</script>

