<script setup>
import { GlobalButton } from '@/components/index';
</script>

<template>
<section class="flex relative bg-[#5BB0F8] p-3 mx-auto w-[95%] sm:w-[300px] h-50 mt-4">
    <span class="absolute top-[-11px] right-[0px] origin-center rotate-[-60deg] w-3 h-5 bg-white"></span>
    <span class="absolute bottom-[-11px] left-[0px] origin-center rotate-120 w-3 h-5 bg-white"></span>
    <div class=" items-center w-3/5 h-full justify-center flex flex-col gap-3">
        <div class="flex flex-col">
            <h3 class="text-white font-medium text-xl">GET FREE ONE PIECE MANGAS...</h3>
            <p class="text-[#4391d5]">One Piece</p>
        </div>

        <div class="w-full flex justify-start">
            <GlobalButton width="w-32" font-size="text-lg" height="h-10" :text="'GET NOW'" text-color="text-[#5BB0F8]" :back-color="'bg-[#5BB0F8]'" :color="'bg-white'" />
             <!-- <GlobalButton /> -->
        </div>
    </div>

    <div class="w-2/5 h-full relative">
        <img class="w-full top-[-40px] h-50 absolute" src="@/assets/images/one_piece_cellphone.png" alt="">
    </div>
</section>    
</template>

<style scoped>

</style>
