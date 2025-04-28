<script setup>
    import { DescritptionDetails, RatingDetails, DetailContainer, ProductHeader, ProductImages, GlobalButton  } from "@/components";
    import { useCharactersStore } from "@/stores/characters";
    import { infoProducts } from "@/utils";
    import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
    
    const route = useRoute()

    const CharacterStore = useCharactersStore()

    onMounted(() => {
        const id = route.params.id
        CharacterStore.getCharacterDetails(id)
    })
</script>
<template>
<div class="w-full flex-col flex">
<ProductHeader :title="CharacterStore.selectedCharacter?.nome" />
<DetailContainer>
        <div class="w-11/12 md:w-8/12 flex-col flex gap-5">
            <ProductImages :images="CharacterStore.selectedCharacter?.imagens" />
            <RatingDetails :rate-amount="CharacterStore.selectedCharacter?.qtd_avaliacoes" :title="CharacterStore.selectedCharacter?.nome" :autor="CharacterStore.selectedCharacter?.bando" :rate="CharacterStore.selectedCharacter?.avaliacao"/>
            <DescritptionDetails class="mb-5" :description="CharacterStore.selectedCharacter?.descricao"/>
        </div>
    </DetailContainer>
    <div  class="mb-15 flex justify-center gap-4" >
    <GlobalButton width="w-32" font-size="text-lg" height="h-10" :text="'Buy'" text-color="text-[#ffff]" :back-color="'bg-[#ffff]'" :color="'bg-[#fb7d54]'" />
    <GlobalButton width="w-32" font-size="text-md" height="h-10" :text="'Add To Cart'" text-color="text-[#ffff]" :back-color="'bg-[#ffff]'" :color="'bg-[#fb7d54]'" />
    </div>
</div>
</template>