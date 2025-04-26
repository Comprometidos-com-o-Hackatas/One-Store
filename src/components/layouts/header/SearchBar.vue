<script setup>
const props = defineProps({
    search: {
        type: Boolean,
        default: false,
    }
})

const emits = defineEmits([
    'openSearch'
])
</script>

<template>
    <div class="flex">
     <div @click="emits('openSearch', console.log(props.search))" class="relative h-full z-40 ">
        <span class="mdi mdi-magnify text-3xl"></span>
    </div>
    <div :class=" props.search ? 'search' : 'search-closed'">
        <input :class="props.search ? 'w-[85%] p-2 outline-0 text-gray-600 h-full text-[12px] ' : 'close-text'" type="text" placeholder="search here...">
    </div>
</div>
</template>

<style scoped>


.search-closed {
    position: absolute;
    width: 0dvw;
    right:8px;
    background-color: rgb(222, 222, 222);
    animation: close-search-animation 0.7s 1 ease-in-out forwards;
    opacity: 0;
    z-index: 30;
    border-radius: 20px;
}

.close-text {
    visibility: hidden;
    transition-delay: 0.1s;
}

.search {
    background-color: rgb(222, 222, 222);
    position: absolute;
    right:8px;
    z-index: 30;
    width: 80vw;  
    height: calc(3/5 * 100%);
    border-radius: 20px;
    opacity: 1;
    animation: open-search 0.4s 1 ease-in-out forwards;
}

@keyframes open-search {
    from {
        width: 0dvw;
        opacity: 0;
    }
    to {
        width: 80dvw;
        opacity: 1;
    }
}

@keyframes close-search-animation {
    0% {
        width: 80dvw;
        opacity: 1;
        height: calc(3/5 * 100%);
    }
    50% {
        width: 15dvw;
        opacity: 0.1;
        height: calc(3/5 * 100%);
    }
    100% {
        width: 0dvw;
        opacity: 0;
        height: calc(3/5 * 100%);
    }
}
</style>