<script setup>
    defineProps({
        description: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <div class="flex flex-col gap-3">
        <h1 class="text-lg md:text-xl">Description</h1>
        <p class="text-neutral-400 text-[10px] md:text-[15px] font-mono descricao" >{{ description }}</p>
    </div>
</template>

<style scoped>

    .descricao {
        font-family: var(--font-poppins);
        font-weight: 500;
    }
</style>