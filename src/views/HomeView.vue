<script setup>
import { ProductCard, Header, ProductsOptions, MarketingCard } from '@/components';
import router from '@/router';
</script>

<template>
  <Header />
  <ProductsOptions />
  <MarketingCard />
  <ProductCard @click="router.push('/details/1')"/>
</template>