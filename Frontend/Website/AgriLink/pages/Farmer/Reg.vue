<template>
  <div class="min-h-screen flex items-center bg-gradient-to-r from-green-200 to-blue-200 p-6">
    <div class="mx-auto w-fit bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-2xl font-bold text-center mb-6 text-green-400 ">Welcome to AgriLink</h1>
      <form @submit.prevent="registerUser">
       

        <!-- First Name -->
        <UInput 
          v-model="formData.firstName" 
          label="First Name" 
          placeholder="Enter your first name" 
          class="mb-4"
          :aria-label="'First name input'"
            :style="{ backgroundColor: 'white',  }"
          required
        />

        <!-- Last Name -->
        <UInput 
          v-model="formData.lastName" 
          label="Last Name" 
          placeholder="Enter your last name" 
          class="mb-4"
          :aria-label="'Last name input'"
           :style="{ backgroundColor: 'white',  }"
          required
        />

        <!-- Email -->
        <UInput 
          v-model="formData.email" 
          label="Email Address" 
          placeholder="yourexample@gmail.com"
          type="email" 
          icon="i-heroicons-envelope" 
          class="mb-4"
          :aria-label="'Email address input'"
          :style="{ backgroundColor: 'white' }"
          required
        />

        <!-- Phone Number -->
        <UInput 
          v-model="formData.phone" 
          label="Phone Number" 
          placeholder="Enter your phone number" 
          type="tel" 
          icon="i-heroicons-phone"
          class="mb-4"
            :style="{ backgroundColor: 'white',  }"
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
            Register
          </UButton>
        </div>
      </form>
       <!-- Already have an account link -->
       <div class="text-center mt-4">
        <p class="text-sm text-black">
          Already have an account? 
          <router-link to="/login" class="text-green-600 hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTogglePassword } from '../composables/toggle';
const { isPassVisible, togglePassword } = useTogglePassword();

// Data properties
const roles = ref([
  { label: 'Farmer', value: 'farmer' },
  { label: 'Buyer', value: 'buyer' },
]);

const formData = ref({
  role: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
});

// Method for handling form submission
const registerUser = () => {
  if (formData.value.role && formData.value.firstName && formData.value.email) {
    console.log("Form Data Submitted:", formData.value);
    alert('Registration successful!');
  } else {
    alert('Please fill out all required fields.');
  }
};
</script>
<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

</style>