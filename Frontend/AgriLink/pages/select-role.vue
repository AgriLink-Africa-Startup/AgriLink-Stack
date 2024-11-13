<template>
    <div class="  bg-gradient-to-br from-white to-green-50 ">
        <NuxtLink to="/">
            <Icon icon="mdi:arrow-left" class="text-2xl ml-4"/>
        </NuxtLink>
       

      <div class=" min-h-screen flex flex-col justify-center items-center space-y-8 py-10 px-6">
        <div 
        class="bg-white rounded-xl shadow-lg p-10 w-full max-w-sm sm:max-w-md flex items-center justify-between text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
        @click="$router.push('/register/farmer')"
      >
        <div class="flex items-center space-x-8">
          <Icon icon="mdi:account-outline" class="text-gray-400 text-2xl" /> <!-- Farmer Icon -->
          <span class="text-2xl font-semibold text-green-700">I am a Farmer</span>
          <Icon icon="mdi:arrow-right" class="text-gray-400 text-2xl" /> <!-- Arrow Icon -->
        </div>
      </div>
  
      <!-- Buyer Section -->
      <div 
        class="bg-white rounded-xl shadow-lg p-10 w-full max-w-sm sm:max-w-md flex items-center justify-between text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
        @click="$router.push('/register/buyer')"
      >
        <div class="flex items-center space-x-8">
          <Icon icon="mdi:cart-outline" class="text-gray-400 text-2xl" /> <!-- Buyer Icon -->
          <span class="text-2xl font-semibold text-green-700">I am a Buyer</span>
          <Icon icon="mdi:arrow-right" class="text-gray-400 text-2xl" /> <!-- Arrow Icon -->
        </div>
      </div>
      </div>
     
    </div>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue'
  </script>
  