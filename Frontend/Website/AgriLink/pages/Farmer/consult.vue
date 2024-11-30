<template>
    <div class="h-screen">
        <AppFarmerNavbar />

        <div class=" mt-20">
            <AppFarmerChatbot />
        </div>
    </div>

</template>
<script setup>


useHead({
    title: 'Crop Management - Consult.iO',
    meta: [
        { name: 'description', content: 'Detailed crop management advice for maximizing your yield.' },
        { property: 'og:title', content: 'Crop Management - Consult.iO' },
        { property: 'og:description', content: 'Expert crop management tips to improve farm productivity.' },
    ],
});
</script>
