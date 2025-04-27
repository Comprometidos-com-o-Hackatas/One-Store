<script setup>
import { useCrewStore } from '@/stores/crew';
import { computed, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const crewStore = useCrewStore();
const crews = crewStore.crews;
const crew = computed(() => crewStore.currentCrew);

const swiperModules = [Navigation];

onMounted(() => {
  console.log('crew', crew.value);
});
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <swiper
      :modules="swiperModules"
      :space-between="5"
      :breakpoints="{
        210: { slidesPerView: 1 },
        350: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
      }"
      class="w-[80%] h-11 my-4"
    >
      <swiper-slide
        v-for="crewOption in crews"
        :key="crewOption.id"
        @click="crewStore.setCurrentCrew(crewOption.id)"
        class="relative flex items-center justify-center cursor-pointer w-40 h-13"
      >
        <div
          :class="[
            'flex items-center justify-center w-full h-full font-bold text-sm text-center transition-colors duration-300',
            crewOption.id == crew.id ? 'bg-amber-400 text-white' : 'bg-white text-gray-300'
          ]"
        >
          {{ crewOption.name }}
        </div>

        <div v-if="crewOption.id == crew.id">
          <span class="absolute top-[-14px] right-[-4px] origin-center rotate-120 w-3 h-7 bg-white"></span>          
          <span class="absolute bottom-[-14px] left-[-4px] origin-center rotate-120 w-3 h-7 bg-white"></span>        
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

