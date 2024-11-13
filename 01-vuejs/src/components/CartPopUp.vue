<template>
  <div class="fixed top-0 right-0 z-[99] w-full max-w-[417px] h-full md:h-[746px] p-8 transition-all duration-700 bg-white shadow-lg overflow-y-auto">
    <div class="flex justify-between items-center border-b border-gray-light pb-7">
      <h2 class="text-2xl font-semibold">Shopping Cart</h2>
      <img src="https://www.furniro.tech/assets/cart-modal-close-icon-3f317b22.svg" @click="$emit('close')" alt="closeButton" class="cursor-pointer" />
    </div>
    <div class="mt-5">
      <!-- Scrollable Cart Items Section -->
      <div class="overflow-y-auto max-h-[400px] space-y-4 pr-2">
        <!-- Cart item 1 -->
        <div class="flex space-x-4">
          <img src="/src/assets/images/Item1.png" alt="Product Image" class="w-20 h-20 bg-[#b88e2f]/20 rounded-[10px]" />
          <div class="flex-1">
            <div class="text-base font-normal">Asgaard sofa</div>
            <div class="flex items-center text-xs font-light">
              <span>1</span> <span class="mx-1">x</span>
              <span class="text-[#b88e2f]">Rs. 250,000.00</span>
            </div>
          </div>
        </div>
        <!-- Cart item 2 -->
        <div class="flex space-x-4">
          <img src="/src/assets/images/Item2.jpg" alt="Product Image" class="w-20 h-20 bg-[#b88e2f]/20 rounded-[10px]" />
          <div class="flex-1">
            <div class="text-base font-normal">Casaliving Wood</div>
            <div class="flex items-center text-xs font-light">
              <span>1</span> <span class="mx-1">x</span>
              <span class="text-[#b88e2f]">Rs. 270,000.00</span>
            </div>
          </div>
        </div>
        <!-- Add more items as needed -->
      </div>
      <!-- Subtotal and Actions -->
      <div class="border-t border-gray-light py-4 mt-4">
        <div class="flex justify-between text-base font-semibold">
          <span>Subtotal</span>
          <span class="text-[#b88e2f]">Rs. 520,000.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartPopUp",
};
</script>

<style scoped>
/* Adjust spacing and heights for mobile */
@media (max-width: 640px) {
  .p-8 {
    padding: 16px;
  }
}
</style>
