<script setup>
import DirectionAwarePics from '../components/HomeView/DirectionAwarePics.vue';
import HomeCarousel from '../components/HomeView/HomeCarousel.vue'

</script>

<template>
<div class="w-full mx-auto text-center">
  <div class="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
    <h2 class="font-bold leading-relaxed text-white text-7xl">Discover Tranquility and Elegance</h2>
    <p class="text-white">Here at the Capital of the Province of Pangasinan</p>
    <a href="#more"><button class="px-10 py-4 mt-4 text-2xl font-bold transition-colors ease-out bg-white text-primary hover:bg-secondary hover:text-white">View More</button>
    </a></div>
  <div class="hero h-[1005px] bg-cover col-span-3"></div>
</div>
<div class="py-4">
<hr class="w-3/4 mx-auto mt-32 border-gray-300 border-5">

  
  <h2 id="more" class="h-64 py-20 my-auto font-bold leading-relaxed text-center text-7xl text-amber-500 ">PLAN YOUR TRIP TO
PANGASINAN</h2>

<hr class="w-3/4 mx-auto my-12 border-gray-300">
</div>
<br />

    <div class="grid w-3/4 grid-cols-2 gap-4 mx-auto">
      
        <div>
          <iframe class="w-full h-96" src="https://www.youtube.com/embed/QdyxuBt8PVc" title="Top 10 Best Tourist Spots in Pangasinan 🚣🏖️🌅❤️" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
            <h2 class="mt-24 text-xl italic text-justify align-middle">Embark on a coastal adventure along Pangasinan's expansive shoreline, perfect for fishing, water sports, or leisurely strolls along Lingayen beach, where you'll witness the breathtaking world-famous Philippine sunset.</h2>
        </div>
    </div>




<div class="w-full my-24">
<DirectionAwarePics />
</div>
<hr class="w-3/4 mx-auto my-12 border-gray-300">
<div class="container5">
  <h1 contenteditable class="text-amber-500">Discover more</h1>
  </div>
<div class="mb-32">
<HomeCarousel />
</div>

</template>
<style>
.hero {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.25)),url('../../src/assets/pangasinan.jpg');
  
  height: 1005px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

hr{
border: 1px solid black;
}

.container5 {
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 120px;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  letter-spacing: -5px;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  outline: none;
  text-align: center;
}

h1:hover {
  font-variation-settings: "wght" 600; 
  letter-spacing: 1px;
}


</style>
