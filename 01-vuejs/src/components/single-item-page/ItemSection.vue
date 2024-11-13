<template>
  <div class="w-[1440px] h-[820px] bg-white mx-auto my-5">
    <div class="w-[1241px] h-[730px] flex mx-auto space-x-6">
      <!-- Left Section with Thumbnails and Main Image -->
      <div class="flex space-x-6">
        <!-- Thumbnails Column -->
        <div class="flex flex-col space-y-3">
          <div v-for="(thumb, index) in thumbnails" :key="index" @click="selectImage(index)"
            class="w-[76px] h-[80px] bg-secondary cursor-pointer rounded-lg overflow-hidden">
            <img :src="thumb" :alt="'Thumbnail ' + (index + 1)" class="object-cover w-full h-full" />
          </div>
        </div>

        <!-- Selected Image Display -->
        <div class="w-[481px] h-[500px] relative">
          <div class="w-[450px] h-[500px] left-[15px] top-0 absolute bg-[#f9f1e7] rounded-[10px]"></div>
          <img class="w-[481px] h-[391px] left-0 top-[78px] absolute" :src="thumbnails[selectedImage]"
            alt="Selected Item Image" />
        </div>
      </div>

      <!-- Right Section with Product Details -->
      <div class="w-[606px] h-[800px] flex flex-col space-y-4">
        <h2 class="text-black text-4xl font-normal">{{ item?.title }}</h2>
        <p class="text-[#9f9f9f] text-2xl font-medium">${{ item?.basePrice && shopItemDetail[0]?.additionalPrice ? item.basePrice + shopItemDetail[0].additionalPrice : 'N/A' }}</p>

        <div class="flex items-center">
          <!-- Full Stars -->
          <svg v-for="i in fullStars" :key="'full-star-' + i" class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <!-- Half Star (Optional) -->
          <svg v-if="hasHalfStar" class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <defs>
              <clipPath id="half">
                <rect x="0" y="0" width="11" height="20" />
              </clipPath>
            </defs>
            <path clip-path="url(#half)"
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <p class="ms-2 text-sm font-bold text-gray-900 dark:text-black">{{ reviews }}</p>
          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-black">
            {{ "73reviews" }}
          </a>
        </div>

        <!-- Description -->
        <p class="text-black text-sm">
          {{ "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well - balanced audio which boasts a clear midrange and extended highs for a sound." }}
        </p>

        <!-- Size Options -->
        <div class="space-y-2">
          <p class="text-gray text-sm">Size</p>
          <div class="flex space-x-4">
            <button v-for="size in sizes" :key="size" :class="[
              'w-[30px] h-[30px] rounded-md transition-colors',
              selectedSize === size ? 'bg-[#b88e2f] text-white' : 'bg-[#f9f1e7] text-black'
            ]" @click="selectSize(size)">
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Color Options -->
        <div class="space-y-2">
          <p class="text-gray text-sm">Color</p>
          <div class="flex space-x-4">
            <span v-for="color in colors" :key="color" :style="{ backgroundColor: color }" @click="selectColor(color)"
              class="w-[30px] h-[30px] rounded-full cursor-pointer" :class="{
                'ring-2 ring-offset-2 ring-gray-700': selectedColor === color,
              }"></span>
          </div>
        </div>

        <!-- Quantity and Add to Cart -->
        <div class="flex space-x-4 mt-4">
          <div class="flex items-center border border-gray rounded-lg w-[123px] h-[63px]">
            <button class="text-black text-lg w-1/3 text-center" @click="decreaseQuantity">-</button>
            <input class="text-black text-lg w-1/3 text-center outline-none" v-model="quantity"></input>
            <button class="text-black text-lg w-1/3 text-center" @click="increaseQuantity">+</button>
          </div>
          <button class="border border-black rounded-lg w-[215px] h-[63px] text-black text-lg">
            Add To Cart
          </button>
          <button
            class="border border-black rounded-lg w-[215px] h-[63px] text-black text-lg flex items-center justify-center">
            + Compare
          </button>
        </div>

        <!-- Additional Information -->
        <div class="border-t border-gray-light mt-6 pt-4 space-y-2">
          <div class="flex justify-between text-gray">
            <span>SKU:</span> <span>{{ "SS001" }}</span>
          </div>
          <div class="flex justify-between text-gray">
            <!-- <span>Category:</span> <span>{{ category || "sofas " }}</span> -->
          </div>
          <div class="flex justify-between text-gray">
            <span>Tags:</span> <span>{{ "Sofa, Chair, Home, Shop" }}</span>
          </div>
          <div class="flex justify-between text-gray">
            <span>Share:</span>
            <span class="space-x-2">
              <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                class="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </button>
              <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                class="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </button>
              <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                class="mb-2 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { ShopItemsService } from "@/services/shopItems/index";
import { CategoriesService } from "@/services/categories/index";
import { ShopItemDetailsService } from "@/services/shopItemDetails/index";
import { ReviewsService } from "@/services/reviews/index";

const route = useRoute();

const shopItemsService = new ShopItemsService();
const categoriesService = new CategoriesService();
const shopItemDetailsService = new ShopItemDetailsService();
const reviewsService = new ReviewsService();

const item = ref<ShopItem | null>(null);
const category = ref<Category | null>(null);
const shopItemDetail = ref<ShopItemDetail[]>([]);
const reviews = ref<Review[]>([]);

onMounted(async () => {
  await fetchItem();
  await fetchCategory();
  await fetchShopItemDetail();
  await fetchReviews();
});

const fetchItem = async () => {
  const id = route.params.id as string; // Retrieve id from route params
  try {
    const { data: itemData, status: itemStatus } = await shopItemsService.getShopItem(id);
    if (itemStatus === 200 && itemData) {
      item.value = itemData;
      return itemData;
    } else {
      console.error("Failed to fetch item data:", itemData);
    }
  } catch (error) {
    console.error("Error fetching item:", error);
  }
  return null;
};

const fetchCategory = async () => {
  const id = item.value?.category;
  if (!id) {
    console.error("Category ID is not available.");
    return null;
  }
  try {
    const { data: categoryData, status: categoryStatus } = await categoriesService.getCategory(id);
    if (categoryStatus === 200 && categoryData) {
      category.value = categoryData;
      console.log("Category Data:", categoryData);
      return categoryData;
    } else {
      console.error("Failed to fetch category data:", categoryData);
    }
  } catch (error) {
    console.error("Error fetching category:", error);
  }
  return null;
};

const fetchShopItemDetail = async () => {
  if (item.value?._id) {  // Check if _id exists before calling function
    try {
      const { data: shopItemDetailResponse, status } = await shopItemDetailsService.getShopItemDetails(item.value._id);
      if (status === 200 && shopItemDetailResponse) {
        shopItemDetail.value = shopItemDetailResponse;
        console.log("Shop Item Detail:", shopItemDetailResponse);
      } else {
        console.error("No details found for the specified shop item.");
      }
    } catch (error) {
      console.error("Error fetching shop item details:", error);
    }
  } else {
    console.error("Shop item ID is undefined.");
  }
};

const fetchReviews = async () => {
  if (item.value?._id) {  // Check if _id exists before calling function
    try {
      const { data: reviewsResponse, status } = await reviewsService.getReviewByShopItem(item.value._id);
      if (status === 200 && reviewsResponse) {
        reviews.value = reviewsResponse;
        console.log("Reviews:", reviewsResponse);
      } else {
        console.error("No reviews found for the specified shop item.");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  } else {
    console.error("Shop item ID is undefined.");
  }
};

// Placeholder image imports
import sofa1 from "../../assets/images/sofa/0c46ac4eb9c274966b1133cb71128f16.png";
import sofa2 from "../../assets/images/sofa/0c46ac4eb9c274966b1133cb71128f6.png";
import sofa3 from "../../assets/images/sofa/148fae44b3bf6e9ac8ce6743c19e7de6.png";
import sofa4 from "../../assets/images/sofa/24c656816d67a755100ac5f664833551.png";
import sofa5 from "../../assets/images/sofa/917ac944454e358f73d0af67e1f1b74e.png";
import type { ShopItem } from "@/services/shopItems/types";
import type { ShopItemDetail } from "@/services/shopItemDetails/types";
import type { Category } from "@/services/categories/types";
import type { Review } from "@/services/reviews/types";

const thumbnails = ref([sofa1, sofa2, sofa3, sofa4, sofa5]);
const selectedImage = ref(0);

const quantity = ref(1);
const increaseQuantity = () => quantity.value++;
const decreaseQuantity = () => { if (quantity.value > 1) quantity.value--; };

const selectImage = (index: number) => {
  selectedImage.value = index;
};

const sizes = ref(['S', 'M', 'L', 'XL']);
const selectedSize = ref(null);

const selectSize = (size: null) => {
  selectedSize.value = size;
};

const rating = ref(4.15);

const displayRating = computed(() => {
  if (rating.value < 4.25) return 4;
  if (rating.value >= 4.25 && rating.value < 4.75) return 4.5;
  return 5;
});

const fullStars = computed(() => Math.floor(displayRating.value));
const hasHalfStar = computed(() => displayRating.value % 1 !== 0);

const colors = ref(['#806df9', '#000000', '#b88e2f', '#FF5733', '#4CAF50', '#2196F3', '#FFC107']);
const selectedColor = ref(null);

const selectColor = (color: null) => {
  selectedColor.value = color;
};

</script>
