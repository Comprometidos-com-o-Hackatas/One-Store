<script setup>
import { ProductCardContainer, Header, ProductsOptions, MarketingCard } from '@/components';
import { useCharactersStore } from '@/stores/characters';
import { useCrewStore } from '@/stores/crew';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const charctersStore = useCharactersStore()
const crewStore = useCrewStore()
const crewId = route.params.id


onMounted(async ()=> {
  await charctersStore.GetCharacter()
  if (crewStore.currentCrew != null) {
  crewStore.setCurrentCrew(crewId);
  } else {
    crewStore.setCurrentCrew(1)
  }
})

</script>

<template>
  <Header />
  <ProductsOptions :data="crewStore.possibleCrews" />
  <MarketingCard />
  <ProductCardContainer />
</template>