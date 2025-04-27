<script setup>
import { ProductCard, Header, ProductsOptions, MarketingCard } from '@/components';
import router from '@/router';
import { useCharactersStore } from '@/stores/characters';
import { onMounted } from 'vue';
const charctersStore = useCharactersStore()

onMounted(()=> {
  charctersStore.GetCharacter()
})
</script>

<template>
  <Header />
  <ProductsOptions />
  <MarketingCard />
  <ProductCard @click="router.push('/details/1')"/>
</template>