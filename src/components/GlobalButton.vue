<script setup>

const props = defineProps({
    text: {
        type: String,
        default: 'get started'
    },
    width: {
        type: String,
        default: 'w-50'
    },
    height : {
        type: String,
        default: 'h-12'
    },
    color: {
        type: String,
        default: 'bg-amber-300'
    },
    backColor: {
        type: String,
        default: 'bg-white'
    }
})

</script>
<template>
    <button :class="`cursor-pointer relative flex items-center justify-center m-10 ${props.width} ${props.height} ${props.color}`">
        <span :class="`absolute top-[-14px] left-[-4px] origin-center rotate-60 w-3 h-5 ${props.backColor}`"></span>
        <span class="text-white text-xl gang-text">{{ props.text }}</span>
        <span :class="`absolute bottom-[-14px] right-[-4px] origin-center rotate-60 w-3 h-5 ${props.backColor}`"></span>
    </button> 
</template>


<style scoped>
.gang-text {
  font-family: 'Gang of Three', sans-serif;
}   
</style>