<script setup>
import { useCrewStore } from '@/stores/crew';
import { computed, onMounted } from 'vue';
import router from '@/router';
import { ProductCard } from '@/components';

const crewStore = useCrewStore();

const crew = computed(() => crewStore.crews)
</script>

<template>
    <div class="w-full h-auto flex flex-wrap justify-center items-center">
        <ProductCard v-for="crewMember in crew" :key="crewMember.id" :name="crewMember.nome" :price="crewMember.preco" :rating="crewMember.avaliacao" @click="router.push('/details/' + crewMember.id)"/>
    </div>
</template>