<script setup>
    import { DescritptionDetails, RatingDetails, DetailContainer  } from "@/components";
    import { infoProducts } from '@/utils'
</script>
<template>
    <DetailContainer>
        <div class="w-10/12 flex-col flex gap-5">
            <RatingDetails :title="infoProducts.title" :autor="infoProducts.autor" :rate="infoProducts.rate"/>
            <DescritptionDetails :description="infoProducts.description"/>
        </div>
    </DetailContainer>
</template>