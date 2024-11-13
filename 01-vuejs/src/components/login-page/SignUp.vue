<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Create an Account</h2>
    <form class="w-full sm:max-w-md space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
        <input id="email" name="email" type="email" autocomplete="email" required
               class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
        <input id="password" name="password" type="password" required
               class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
      </div>
      <div>
        <label for="confirm-password" class="block text-sm font-medium text-gray-900">Confirm Password</label>
        <input id="confirm-password" name="confirm-password" type="password" required
               class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
      </div>
      <button type="submit" class="w-full bg-indigo-600 text-white rounded-md px-3 py-1.5 font-semibold shadow-sm hover:bg-indigo-500">
        Sign Up
      </button>
    </form>
  </div>
</template>
