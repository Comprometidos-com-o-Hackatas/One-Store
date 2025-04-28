<script setup>
import { ProductCardContainer, Header, ProductsOptions, MarketingCard } from '@/components';
import { useCharactersStore } from '@/stores/characters';
import { onMounted } from 'vue';
const charctersStore = useCharactersStore()

onMounted(async ()=> {
  await charctersStore.GetCharacter()
})
</script>

<template>
  <Header />
  <ProductsOptions />
  <MarketingCard />
  <ProductCardContainer />
</template>