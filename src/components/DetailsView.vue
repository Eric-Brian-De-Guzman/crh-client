<script setup>

import DetailCard from './DetailsView/DetailCard.vue';
import GMaps from './DetailsView/Gmaps.vue'
import Socmed from './DetailsView/SocMed.vue'
</script>
<template>

<div class="w-full mx-auto text-center">
  <div class="absolute transform -translate-x-1/2 -translate-y-1/2 right-1/3 top-1/2">
    <h2 class="font-bold leading-relaxed text-white text-7xl">Want to know more?</h2>
    <p class="text-xl text-white">Here at the Capital of the Province of Pangasinan</p>
</div>
  <div class="heroo2 h-[1005px] bg-cover col-span-3"></div>
</div>

<div class="my-32">
<GMaps />
</div>
<div class="mt-10">
<DetailCard />
</div>
<Socmed />
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