<template>
    <section>
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Featured Products</h2>
            <ULink to="/Farmer/products" class="text-green-500 text-sm">See All</ULink>
        </div>
        <div class="grid grid-cols-2 gap-4">

            <UCard v-for="(product, index) in featuredProducts" :key="index" class="text-center" :style="{backgroundColor:'white', color:'black'}">

                <img :src="product.image" alt="Product Image" class="w-full h-40 object-cover rounded-t-lg" />
                <!-- Content Section -->
                <div class="p-2">
                    <h3 class="text-sm font-semibold">{{ product.name }}</h3>
                    <p class="text-sm text-gray-500">{{ product.price }}</p>
                </div>
            </UCard>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const featuredProducts = ref([
    { name: "Rice ", price: "sh 120/kg", image: "/myproducts/rice.jpeg" },
    { name: "Maize", price: "Ksh 60/kg", image: "/myproducts/maize.jpeg" },
    { name: "Dairy Cows", price: "Ksh 100k/Animal", image: "/myproducts/cows.jpeg" },
    { name: "Chicken", price: "Ksh 600/chicken", image: "/myproducts/chicken.jpeg" },
]);
</script>