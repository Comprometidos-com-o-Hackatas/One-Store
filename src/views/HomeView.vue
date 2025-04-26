<script setup>
import { ProductCard, Header, ProductsOptions } from '@/components';
import router from '@/router';
</script>

<template>
  <Header />
  <ProductsOptions />
  <ProductCard @click="router.push('/details/1')"/>
</template>