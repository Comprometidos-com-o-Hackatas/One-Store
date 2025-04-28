<script setup>
    import { DescritptionDetails, RatingDetails, DetailContainer, ProductHeader, ProductImages  } from "@/components";
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
<div class="w-11/12 flex-col flex gap-10">
<ProductHeader />
<DetailContainer>
        <div class="w-10/12 flex-col flex gap-5">
            <ProductImages :images="CharacterStore.selectedCharacter?.imagens" />
            <RatingDetails :title="CharacterStore.selectedCharacter?.nome" :autor="CharacterStore.selectedCharacter?.bando" :rate="CharacterStore.selectedCharacter?.avaliacao"/>
            <DescritptionDetails :description="CharacterStore.selectedCharacter?.descricao"/>
        </div>
    </DetailContainer>
</div>
</template>