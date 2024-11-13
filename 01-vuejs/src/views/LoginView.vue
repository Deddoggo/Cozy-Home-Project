<script setup lang="ts">
import { ref } from 'vue';
import LoginSection from '@/components/login-page/LoginSection.vue';

const currentForm = ref('login');

const showForgotPassword = () => {
  currentForm.value = 'forgotPassword';
};

const showSignUp = () => {
  currentForm.value = 'signUp';
};

const showLogin = () => {
  currentForm.value = 'login';
};
</script>

<template>
  <LoginSection
    :currentForm="currentForm"
    :onForgotPassword="showForgotPassword"
    :onSignUp="showSignUp"
    :onBackToLogin="showLogin"
  />
</template>
