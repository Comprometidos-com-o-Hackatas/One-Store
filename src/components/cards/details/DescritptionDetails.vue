<script setup>
    defineProps({
        description: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <div class="flex flex-col gap-5">
        <h1 class="text-2xl">Description</h1>
        <p class="text-neutral-400 text-sm" >{{ description }}</p>
    </div>
</template>