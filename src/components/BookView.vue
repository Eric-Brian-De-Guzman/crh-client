<script setup>
import BookForm from '../components/BookView/BookingForm.vue'
import BookCarousel from '../components/BookView/BookCarousel.vue'
</script>
<template>
<div class="w-full mx-auto text-center">
  <div class="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
    <BookForm />
</div>
  <div class="heroo2 h-[1005px] bg-cover col-span-3"></div>
</div>
<hr class="z-50 w-3/4 mx-auto mt-32 border-gray-300 border-5">
<div class="w-5/6 pt-10 mx-auto">
    <BookCarousel />
    </div>


    <div class="absolute z-[-1] ml-[-5] transform -translate-x-1/2 translate-y-1/2 opacity-60 left-1/4 -bottom-1/2">
        <img src="../../src/assets/ILovePangasinanLogo.png" class="h-[705px]" alt="">
    </div>


</template>
<style>
.heroo2 {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.25)),url('../../src/assets/pic5.jpg');
  
  height: 1005px;

  /* Create the parallax scrolling effect */
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>