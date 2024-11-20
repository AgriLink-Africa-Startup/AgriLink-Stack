<template>
  <div class="min-h-screen flex items-center bg-gradient-to-r from-green-200 to-blue-200 p-6">
    <div class="mx-auto w-fit bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-2xl font-bold text-center mb-6 text-green-400">Welcome to AgriLink</h1>
      <form @submit.prevent="login">

        <!-- Phone Number -->
        <UInput 
          v-model="formData.phone" 
          label="Phone Number" 
          placeholder="0716******" 
          type="tel" 
          icon="i-heroicons-phone"
          class="mb-4"
          :style="{ backgroundColor: 'white' }"
          :aria-label="'Phone number input'"
          required
        />

        <!-- Password -->
        <div class="mb-4 relative">
          <UInput 
            v-model="formData.password" 
            label="Password" 
            placeholder="Enter your password" 
            :type="isPassVisible ? 'text' : 'password'"  
            :aria-label="'Password input'"
            :style="{ backgroundColor: 'white' }"
            required
          />
          <span class="absolute right-3 top-0 cursor-pointer text-gray-500 border-l-2 p-1" @click="togglePassword">
            {{ isPassVisible ? "🙈" : "👁️" }}
          </span>
        </div>

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

      <!-- Register Link -->
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
import { useRouter } from 'vue-router';
import { useTogglePassword } from '../composables/toggle';

// Router instance
const router = useRouter();

// Password visibility composable
const { isPassVisible, togglePassword } = useTogglePassword();

// Form data
const formData = ref({
  phone: '',
  password: '',
});

// Fetching Farmer Data
const fetchFarmerData = async () => {
  try {
    const response = await fetch("/farmer.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.farmers;
  } catch (error) {
    console.error("Error fetching farmer data:", error);
    return [];
  }
};

// Login Logic
const login = async () => {
  if (!formData.value.phone || !formData.value.password) {
    alert("Please enter both phone number and password.");
    return;
  }

  const farmers = await fetchFarmerData();
  const farmer = farmers.find(
    (f) =>
      f.phone === formData.value.phone &&
      f.password === formData.value.password
  );

  if (farmer) {
    alert("Login successful!");
    console.log("Logged-in Farmer:", farmer);

    // Save farmer data to localStorage
    localStorage.setItem("farmerData", JSON.stringify(farmer));

    // Navigate to Farmer Dashboard
    router.push('/farmer/dashboard');
  } else {
    alert("Invalid credentials. Please try again.");
  }
};
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
