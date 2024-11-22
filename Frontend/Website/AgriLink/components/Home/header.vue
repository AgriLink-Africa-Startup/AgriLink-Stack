<template>
    <div class="flex justify-between items-center mb-6">
        <div>
            <h1 class="text-lg font-semibold">Hi {{ farmerData.name }}! 👋</h1>
            <p class="text-sm text-gray-500">Enjoy our services!</p>
        </div>
        <UChip :text="count" size="lg">
            <UButton icon="i-heroicons-bell" size="xl" variant="ghost" class="text-green-600" />
        </UChip>

    </div>


    <UInput v-model="search" placeholder="Search here..." size="md" icon="i-heroicons-magnifying-glass" class="mb-6" />
</template>
<script setup>
import { ref } from "vue";
const count = ref(3)
const search = ref("");
const farmerData = localStorage.getItem("farmerData")
    ? JSON.parse(localStorage.getItem("farmerData"))
    : null;
</script>