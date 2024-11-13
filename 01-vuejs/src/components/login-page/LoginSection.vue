<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  currentForm: string;
  onForgotPassword: () => void;
  onSignUp: () => void;
  onBackToLogin: () => void;
}>();
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-gray-50">
    <!-- Bên trái: chứa ảnh và giới thiệu -->
    <div class="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Cozy Home Furniture</h1>
        <p class="text-gray-600 font-medium">
          Discover high-quality furniture that combines comfort, style, and elegance.
        </p>
        <img src="@/assets/images/poster.png" alt="Description Image" class="w-full mx-auto mt-3 mb-6 rounded-md shadow-md" />
      </div>
    </div>

    <!-- Bên phải: Form đăng nhập / Quên mật khẩu / Đăng ký -->
    <div class="w-full md:w-1/2 flex flex-col justify-center p-8">
      <div class="mx-auto w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-center text-2xl font-bold text-gray-900 mb-6">
          {{ currentForm === 'login' ? 'Sign in to your account' : currentForm === 'forgotPassword' ? 'Forgot Password' : 'Create an Account' }}
        </h2>

        <!-- Login Form -->
        <form v-if="currentForm === 'login'" class="space-y-6">
          <input type="email" placeholder="Email address" required class="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500" />
          <input type="password" placeholder="Password" required class="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500" />
          <button type="submit" class="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-500">Sign in</button>
          <p class="text-center text-sm text-gray-500 mt-4">
            <a @click.prevent="props.onForgotPassword" class="text-indigo-600 hover:underline cursor-pointer">Forgot password?</a>
          </p>
          <p class="text-center text-sm text-gray-500 mt-2">
            Not a member? <a @click.prevent="props.onSignUp" class="text-indigo-600 hover:underline cursor-pointer">Register Here</a>
          </p>
        </form>

        <!-- Forgot Password Form -->
        <form v-else-if="currentForm === 'forgotPassword'" class="space-y-6">
          <p class="text-center text-gray-600">Enter your email address to reset your password.</p>
          <input type="email" placeholder="Email address" required class="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500" />
          <button type="submit" class="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-500">Reset Password</button>
          <p class="text-center mt-4 text-indigo-600 hover:underline cursor-pointer" @click.prevent="props.onBackToLogin">Back to Login</p>
        </form>

        <!-- Sign Up Form -->
        <form v-else class="space-y-6">
          <input type="email" placeholder="Email address" required class="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500" />
          <input type="password" placeholder="Password" required class="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500" />
          <input type="password" placeholder="Confirm Password" required class="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500" />
          <button type="submit" class="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-500">Sign Up</button>
          <p class="text-center mt-4 text-indigo-600 hover:underline cursor-pointer" @click.prevent="props.onBackToLogin">Back to Login</p>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
/* Bổ sung nếu cần */
</style>
