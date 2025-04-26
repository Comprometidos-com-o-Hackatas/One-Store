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
    <div class="flex flex-col gap-5">
        <div>
            <h1 class="text-3xl">{{ title }}</h1>
            <p class="text-neutral-400 text-[22px]">by {{ autor }}</p>
        </div>
        <div class="flex gap-2 text-lg">
            <div class="flex">
                <i v-for="i in 5" :key="i" :class="rate >= i ? 'mdi mdi-star text-amber-300' : 'mdi mdi-star-outline text-amber-300'"></i>
            </div>
            <p class="text-neutral-300 ">{{ rate }} (4123)</p>
        </div>
    </div>
    <div class="mt-2 me-5">
        <i class="mdi mdi-heart-outline text-4xl text-neutral-300"></i>
    </div>
</div>
</template>