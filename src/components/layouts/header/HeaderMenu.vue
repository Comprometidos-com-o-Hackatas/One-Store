<script setup>
const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    }
})

const emits = defineEmits([
    'open-menu'
])
</script>
<template>
    <div @click="emits('open-menu')" class="h-full w-8 flex items-center justify-center relative">
        <span class="h-full items-start relative justify-center w-full flex flex-col">
        <div :class="props.open ? 'open-1' : 'bar-menu-1'" class="bar" ></div>
        <div :class="props.open ? 'open-2' : 'bar-menu-2'" class="bar"></div>
        <div :class="props.open ? 'open-3' : 'bar-menu-3'" class="bar"></div>
        </span>
    </div>
</template>
<style scoped>
@import url('@/assets/styles/header.css');
</style>