<template>
    <div class="min-h-screen flex items-center  bg-gradient-to-r from-green-200 to-blue-200 p-6">
      <div class="mx-auto w-fit bg-white shadow-lg rounded-lg p-8">
        <h1 class="text-2xl font-bold text-center mb-6">Welcome to AgriLink</h1>
        
        <form @submit.prevent="registerUser">
          <UInput 
            v-model="formData.role" 
            label="Role" 
            placeholder="Select Role" 
            :options="roles" 
            class="mb-4"
            type="select"
            :clearable="true"
          />
  
          <UInput 
            v-model="formData.firstName" 
            label="First Name" 
            placeholder="Enter your first name" 
            class="mb-4" 
          />
          
          <UInput 
            v-model="formData.lastName" 
            label="Last Name" 
            placeholder="Enter your last name" 
            class="mb-4" 
          />
          
          <UInput 
            v-model="formData.email" 
            label="Email" 
            placeholder="yourexample@gmail.com"
            icon="i-heroicons-envelope" 
            type="email" 
            class="mb-4"
          />
          
          <UInput 
            v-model="formData.phone" 
            label="Phone Number" 
            placeholder="Enter your phone number" 
            icon="i-heroicons-phone"
            type="tel" 
            class="mb-4"
          />
          
          <UInput 
            v-model="formData.password" 
            label="Password" 
            placeholder="Enter your password" 
            type="password" 
            class="mb-4"
          />
          
          <div class="text-center">
            <UButton type="submit" class="flex justify-center w-full bg-white hover:bg-green-600 text-green-600 hover:text-white py-2 px-4 rounded-lg">
              Register
            </UButton>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        roles: [
          { label: 'Farmer', value: 'farmer' },
          { label: 'Buyer', value: 'buyer' },
        ],
        formData: {
          role: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
        },
      };
    },
    methods: {
      registerUser() {
        if (this.formData.role && this.formData.firstName && this.formData.email) {
          console.log("Form Data Submitted:", this.formData);
          alert('Registration successful!');
          // Handle your registration logic here, such as making an API call
        } else {
          alert('Please fill out all required fields.');
        }
      },
    },
  };
  </script>
  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  