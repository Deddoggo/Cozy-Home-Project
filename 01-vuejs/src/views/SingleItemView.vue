<script setup>
import DescriptionSection from '@/components/single-item-page/DescriptionSection.vue';
import HeadBanner from '@/components/single-item-page/HeadBanner.vue';
import ItemSection from '@/components/single-item-page/ItemSection.vue';
import OtherProducts from '@/components/single-item-page/OtherProducts.vue';

import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const itemId = ref(route.params.id);

onMounted(() => {
  // Use itemId.value to fetch or display the specific item data
});
</script>

<template>
  <HeadBanner />
  <ItemSection />
  <DescriptionSection />
  <OtherProducts />
</template>
