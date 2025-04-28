<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const swiperModules = [Navigation];
const props = defineProps({
    images: {
        type: Array,
    }
})
</script>

<template>
  <div class="flex flex-col items-center p-1 justify-center">
    <swiper v-if="props.images?.length > 1"
      :modules="swiperModules"
      :space-between="5"
     
      class="w-[80%] md:w-[30%] my-4"   
    >
      <swiper-slide
        v-for="image, i in images"
        :key="i"
        class="relative flex items-center justify-center cursor-pointer w-40"
      >
      <div class="w-[100%] h-80 md:h-96 relative flex items-center justify-center">
        <img class="w-full h-full opacity-20" :src="image" alt="">
        <div class="absolute h-full w-full bg-transparent backdrop-blur-xl"></div>
        <div class="w-[90%] absolute my-4 h-72 md:h-96 border-[#fb7d54] flex justify-center items-center border-radius border-3">
        <img :src="image" alt="" srcset="" class="h-11/12 w-11/12 border-radius">
        </div>
    </div>

        
      </swiper-slide>
    </swiper>

    
    <div v-else class="w-[70%] h-80 relative flex items-center justify-center">
        <img class="w-full h-full opacity-20" src="@/assets/images/goldDroger.png" alt="">
        <div class="absolute h-full w-full bg-transparent backdrop-blur-xl"></div>
        <div class="w-[90%] absolute my-4 h-72 border-[#fb7d54] flex justify-center items-center border-radius border-3">
        <img :src="images" alt="" srcset="" class="h-11/12 w-11/12 border-radius">
        </div>
    </div>
  </div>
</template>

<style scoped>

.border-radius {
    border-radius: 0px 20px 0px 20px;
}
</style>
