<script setup>
import { onMounted } from "vue"

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
        }
    })

</script>
<template>
<div class="flex justify-between">
    <div class="flex flex-col gap-2">
        <div>
            <h1 class="text-xl">{{ title }}</h1>
            <p class="text-neutral-400 text-[15px]">by {{ autor }}</p>
        </div>
        <div class="flex gap-2 text-md items-center">
            <div class="flex">
                <i v-for="i in 5" :key="i" :class="rate >= i ? 'mdi mdi-star text-amber-300' : 'mdi mdi-star-outline text-amber-300'"></i>
            </div>
            <p class="text-neutral-300 text-[12px]">{{ rate }} (4123)</p>
        </div>
    </div>
    <div class="mt-2 me-5">
        <i class="mdi mdi-heart-outline text-2xl text-neutral-300"></i>
    </div>
</div>
</template>