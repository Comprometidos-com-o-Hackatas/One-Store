<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Product Title'
    }
})
</script>
<template>
<header class="w-full h-16 p-3 flex justify-between relative items-center px-5">
    <span class="mdi mdi-arrow-left text-xl"></span>

    <h1 class="text-lg">{{ props.title }}</h1>
   
    <span class="mdi mdi-share-variant text-xl"></span> 
</header>
</template>
<style scoped>
@import url('@/assets/styles/header.css');
</style>