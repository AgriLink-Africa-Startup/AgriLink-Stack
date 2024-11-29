<template>
    <div class="p-6 max-w-xl bg-white ">
      <!-- Profile Header -->
      <div class="flex items-center space-x-6">
        <img
          v-if="farmer.profileImage"
          :src="farmer.profileImage"
          alt="Farmer Profile"
          class="w-24 h-24 rounded-full object-cover shadow-md"
        />
        <div>
          <h2 class="text-2xl font-semibold text-gray-900">{{ farmer.name }}</h2>
          <p class="text-sm text-gray-500">{{ farmer.farmerType }}</p>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <span>{{ farmer.followers }} <span class="font-semibold">Followers</span></span>
          </div>
        </div>
      </div>
  
      <!-- Contact Info -->
      <div class="mt-6">
        <div class="flex justify-between items-center">
          <p class="font-medium text-lg text-gray-900">Contact Info</p>
        </div>
        <ul class="mt-4 space-y-3">
          <li class="flex items-center space-x-2 text-gray-700">
            <!-- Location Icon using Nuxt UI's UIcon component -->
            <UIcon name="heroicons:link" size="24" class="text-green-500" />
            <span>{{ farmer.location }}</span>
          </li>
          <li class="flex items-center space-x-2 text-gray-700">
            <UIcon name="heroicons:envelope" size="20" class="text-green-500" />
            <span>{{ farmer.email }}</span>
          </li>
          <li class="flex items-center space-x-2 text-gray-700">
            <UIcon name="heroicons:phone-solid" size="20" class="text-green-500" />
            <span>{{ farmer.phone }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
    const farmer = ref({
      profileImage: 'https://via.placeholder.com/150',
      name: 'Reuben Nzembei',
      followers: 1257,
      location: 'Farmville, USA',
      email: 'john.doe@example.com',
      phone: '+1 234 567 890',
      farmerType: 'Commercial Farmer',
    })
  </script>
  