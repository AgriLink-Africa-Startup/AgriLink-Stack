<template>
    <div class="min-h-screen flex items-center bg-gradient-to-r from-green-200 to-blue-200 p-6">
      <div class="mx-auto w-fit bg-white shadow-lg rounded-lg p-8">
        <h1 class="text-2xl font-bold text-center mb-6 text-green-400 ">Welcome to AgriLink</h1>
        <form @submit.prevent="loginUser">
  
          <!-- Phone Number -->
          <UInput 
            v-model="formData.phone" 
            label="Phone Number" 
            placeholder="Enter your phone number" 
            type="tel" 
            icon="i-heroicons-phone"
            class="mb-4"
            :style="{ backgroundColor: 'white' }"
            :aria-label="'Phone number input'"
            required
          />
  
          <!-- Password -->
          <UInput 
            v-model="formData.password" 
            label="Password" 
            placeholder="Enter your password" 
            type="password" 
            class="mb-4"
            :aria-label="'Password input'"
            :style="{ backgroundColor: 'white' }"
            required
          />
  
          <!-- Submit Button -->
          <div class="text-center">
            <UButton 
              type="submit" 
              class="flex justify-center w-full py-2 px-4 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Login
            </UButton>
          </div>
        </form>
         <!-- Already have an account link -->
      <div class="text-center mt-4">
        <p class="text-sm text-black">
          Don't have an account? 
          <router-link to="/select-role" class="text-green-600 hover:underline">Register</router-link>
        </p>
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Data properties
  const formData = ref({
    phone: '',
    password: '',
  });
  
  // Method for handling form submission
  const loginUser = () => {
    if (formData.value.phone && formData.value.password) {
      console.log("Login Data Submitted:", formData.value);
      alert('Login successful!');
    } else {
      alert('Please enter your phone number and password.');
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  