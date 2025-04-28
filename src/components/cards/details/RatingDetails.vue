<script setup>
import { ref } from 'vue';

    defineProps({
        title: {
            type: String,
            required: true
        },
        autor: {
            type: String,
            required: true
        },
        rate: {
            type: String,
            required: true
        },
        rateAmount: {
            type: Number,
            required: true,
        }
    })

    const favorite = ref(false)
</script>
<template>
<div class="flex justify-between">
    <div class="flex flex-col gap-2">
        <div>
            <h1 class="text-xl md:text-3xl">{{ title }}</h1>
            <p class="text-neutral-400 text-[15px] md:text-[18px]">by {{ autor }}</p>
        </div>
        <div class="flex gap-2 text-md items-center">
            <div class="flex">
                <i v-for="i in 5" :key="i" :class="rate >= i ? 'mdi mdi-star text-amber-300' : 'mdi mdi-star-outline text-amber-300'"></i>
            </div>
            <p class="text-neutral-300 text-[12px] md:text-[14px]">{{ rate }} ({{ rateAmount }})</p>
        </div>
    </div>
    <div @click="favorite = !favorite" class="mt-2 me-5">
        <i :class="` text-2xl duration-150 ${favorite ? 'text-red-400 mdi mdi-heart' : 'text-neutral-300 mdi mdi-heart-outline'}`"></i>
    </div>
</div>
</template>