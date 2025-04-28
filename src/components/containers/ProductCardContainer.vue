<script setup>
import { useCrewStore } from '@/stores/crew';
import { useCharactersStore } from '@/stores/characters';
import { computed, onMounted } from 'vue';
import router from '@/router';
import { ProductCard } from '@/components';
const charactersStore = useCharactersStore()
const crewStore = useCrewStore();

const selectData = computed(()=> {
    if (charactersStore.charactersByName.length == 0) {
        return crewStore.crews
    } else {
        return charactersStore.charactersByName
    }
})

</script>

<template>
     <div v-if="charactersStore.state.error" class="w-full mt-5 flex justify-center">
        <p>Não Encontrado</p>
    </div>
    <div v-else class="w-full h-auto flex flex-wrap justify-center items-center">
        <ProductCard v-for="crewMember in selectData" :key="crewMember.id" :name="crewMember.nome" :price="crewMember.preco" :rating="crewMember.avaliacao" @click="router.push('/details/' + crewMember.id)" :img="crewMember.imagens" />
    </div>
</template>