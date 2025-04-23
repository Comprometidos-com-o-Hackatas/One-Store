<script setup>
import { ref } from 'vue'
const props = defineProps({
    name: {
        type: String,
        default: 'Action Figure'
    },
    price: {
        type: String,
        default: '00.00'
    }, 
    rating: {
        type: String,
        default: '4.99'
    },
    amountOfRate: {
        type: String,
        default: '5.564'
    }
})

const product = ref(0)
const emits = defineEmits([
    'sendProduct'
])
</script>

<template>
 <span class=" flex flex-col w-32 h-56 m-20 hover:brightness-[95%] rounded-[11px] hover:bg-[rgba(0,0,0,0.05)] hover:scale-[103%] duration-200 cursor-default z-40 ">
    <div class="h-9/12 cursor-pointer relative flex justify-center">
    <div class="border-3 relative w-full h-full border-[#fb7d54] border-custom">
      
        <div class="flex h-full w-full items-end">
            <img class=" h-44 z-20 w-full bottom-0 object-contain absolute" src="@/assets/images/goldDroger.png" alt="">
                   
            <div class="w-full z-30 bg-[#fb7d54] flex justify-center items-center p-2 border-description">
                <p class="text-white font-medium text-center">{{ props.name }}</p>
                       
            </div>
        </div>
    </div>
    </div>

    <div class="h-3/12 w-full flex">
        <div class="flex justify-center flex-col w-8/12">
            <p class=" font-bold text-[18px]">$ {{ props.price }}</p>
            <div class="flex gap-1"><span class="mdi mdi-star text-[12px] text-yellow-400"></span> <p class="text-gray-500 font-semibold text-[12px]"> {{ props.rating }} ({{ props.amountOfRate }})</p></div>
        </div>

        <div class="w-4/12 flex items-center justify-end cursor-pointer">
            <div @click="emits('sendProduct', product)" class="flex border-button z-50 w-10 h-10 justify-center items-center bg-[#fb7d54] hover:scale-[103%] duration-200 hover:brightness-[110%]">
                <span class="mdi mdi-plus text-2xl text-white"></span>
            </div>
        </div>
    </div>
 </span>
</template>


<style scoped>
.border-custom {
    border-radius: 11px 11px 11px 0px;
}

.border-description {
    border-radius: 11px 0px 8px;
}

.border-button  {
    border-radius: 0px 11px 0px 11px;
}

</style>