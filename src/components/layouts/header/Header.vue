<script setup>
import { ref } from 'vue';
import { HeaderMenu, SearchBar } from '@/components/index';
const open = ref(false)
const search = ref(false)
</script>
<template>
<header class="w-full h-16 p-3 flex justify-between relative items-center">
    <HeaderMenu :open="open" @open-menu="open = !open" />

    <div class="h-14 object-cover flex justify-center items-center text-xl">
        <img class="w-12 h-[80%]" src="@/assets/images/logo.png" alt="">
         <p>ONE STORE</p>
    </div>

    <SearchBar @open-search="search = !search" :search="search" />
   
</header>
</template>
<style scoped>
@import url('@/assets/styles/header.css');
</style>