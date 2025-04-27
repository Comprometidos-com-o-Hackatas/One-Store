<script setup>
    import { DescritptionDetails, RatingDetails, DetailContainer, ProductHeader, ProductImages  } from "@/components";
    import { infoProducts } from '@/utils'
</script>
<template>
   
<div class="w-11/12 flex-col flex gap-10">

<ProductHeader />
<DetailContainer>
        <div class="w-10/12 flex-col flex gap-5">

            <RatingDetails :title="infoProducts.title" :autor="infoProducts.autor" :rate="infoProducts.rate"/>
            <DescritptionDetails :description="infoProducts.description"/>
        </div>
    </DetailContainer>


<ProductImages :images="[1, 2, 3]" />
</div>
</template>