<script setup>
import { ProductCard, Header } from '@/components';
import router from '@/router';
</script>

<template>
  <Header />
  <ProductCard @click="router.push('/details/1')"/>
</template>