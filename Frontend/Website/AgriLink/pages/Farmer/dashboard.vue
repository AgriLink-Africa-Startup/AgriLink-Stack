<template>
    <div class="bg-white min-h-screen px-4 py-6">

        <header class="flex justify-between items-center mb-6">
            <div>
                <h1 class="text-lg font-semibold">Hi {{ farmerData.name }}! 👋</h1>
                <p class="text-sm text-gray-500">Enjoy our services!</p>
            </div>
            <UButton icon="i-heroicons-bell" size="sm" variant="ghost" class="text-green-600" />
        </header>


        <UInput v-model="search" placeholder="Search here..." size="md" icon="i-heroicons-magnifying-glass"
            class="mb-6" />


        <UCard class="mb-6 bg-green-50">
            <template #header>
                <div class="flex items-center">
                    <img src="/myproducts/consult.png" alt="Free Consultation" class="w-10 h-10 rounded-full mr-4" />
                    <div>
                        <h2 class="text-sm font-semibold">Free Consultation</h2>
                        <p class="text-xs text-gray-500">
                            Get free support from our customer service
                        </p>
                    </div>
                </div>
            </template>
            <UButton size="sm" class="mt-4 ">
                Call Now
            </UButton>
        </UCard>


        <section>
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Featured Products</h2>
                <ULink to="/products" class="text-green-500 text-sm">See All</ULink>
            </div>
            <div class="grid grid-cols-2 gap-4">

                <UCard v-for="(product, index) in featuredProducts" :key="index" class="text-center">

                    <img :src="product.image" alt="Product Image" class="w-full h-40 object-cover rounded-t-lg" />
                    <!-- Content Section -->
                    <div class="p-2">
                        <h3 class="text-sm font-semibold">{{ product.name }}</h3>
                        <p class="text-sm text-gray-500">{{ product.price }}</p>
                    </div>
                </UCard>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");

const featuredProducts = ref([
    { name: "Rice ", price: "sh 120/kg", image: "/myproducts/rice.jpeg" },
    { name: "Maize", price: "Ksh 60/kg", image: "/myproducts/maize.jpeg" },
    { name: "Dairy Cows", price: "Ksh 100k/Animal", image: "/myproducts/cows.jpeg" },
    { name: "Chicken", price: "Ksh 600/chicken", image: "/myproducts/chicken.jpeg" },
]);
const farmerData = localStorage.getItem("farmerData")
  ? JSON.parse(localStorage.getItem("farmerData"))
  : null;
</script>

<style scoped>
body {
    font-family: "Poppins", sans-serif;
}
</style>