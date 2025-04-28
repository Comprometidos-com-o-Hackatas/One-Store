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
  <ProductCard v-for="info in charctersStore.characters" :key="info.id" :name="info.nome" :price="info.preco" :rating="info.avaliacao" :img="info.imagens[0]" @click="router.push(`/details/${info.id}`)"/>
</template>