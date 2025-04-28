<script setup>
import { useCrewStore } from '@/stores/crew';
import { useCharactersStore } from '@/stores/characters';
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const crewStore = useCrewStore();
const charactersStore = useCharactersStore();
const crews = crewStore.possibleCrews;
const crew = computed(() => crewStore.currentCrew)
const route = useRoute();
const router = useRouter();
const crewId = route.params.id;

const swiperModules = [Navigation];

const props = defineProps({
  data: {
    type: Array,
    required: true,
  }
})

function setCrew(Id) {
  crewStore.setCurrentCrew(Id);
  router.push({ name: 'home', params: { id: Id } });

}

</script>

<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <swiper
      :modules="swiperModules"
      :space-between="5"
      :breakpoints="{
        210: { slidesPerView: 1 },
        350: { slidesPerView: 2.5 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
      }"
      class="w-[80%] h-11 my-4"
    >
      <swiper-slide
        v-for="crewOption in props.data"
        :key="crewOption.id"
        @click="setCrew(crewOption.id)"
        class="relative flex items-center justify-center cursor-pointer w-40 h-13"
      >
        <div
          :class="[
            'flex items-center justify-center w-full h-full font-bold text-sm text-center transition-colors duration-300',
            crewOption?.id == crew?.id ? 'bg-amber-400 text-white' : 'bg-white text-gray-300'
          ]"
        >
          {{ crewOption.name }}
        </div>

        <div v-if="crewOption.id == crew?.id">
          <span class="absolute top-[-14px] right-[-4px] origin-center rotate-120 w-3 h-7 bg-white"></span>          
          <span class="absolute bottom-[-14px] left-[-4px] origin-center rotate-120 w-3 h-7 bg-white"></span>        
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

