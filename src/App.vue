<script setup>
import { RouterView } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faCalendar)
library.add(faCircleExclamation)
</script>

<template>
<div class="fixed z-50 bottom-12 right-4">
  <a href="/book"><button class="px-4 py-2 m-4 font-bold transition-colors ease-out bg-white shadow-lg border-1 text-primary hover:bg-secondary hover:text-white"><font-awesome-icon class="pr-2" :icon="faCircleExclamation" />
    Recommended for you
  </button></a>
</div>
<header id="header" class="bg-gray-700 bg-opacity-75 fixed z-50 w-[98%] left-4 rounded-md top-3">
  <div class="grid grid-cols-2">
    <div id="logo-section" class="flex items-center h-20">
      <img src="./assets/ilyp-logo.png" alt="joniel in a jacket" class="h-16 ml-10 mr-0">
      <h2 class="m-4 text-sm text-white font-extralight">+63 938 146 3754</h2>
      <h2 class="text-sm text-white font-extralight">Lingayen, Pangasinan</h2>
    </div>
    <div id="menu-section" class="flex items-center justify-end h-20">
      <a class="mx-4 text-white underline-offset-8 hover:text-secondary" href="/">Home</a>
      <a class="mx-4 text-white underline-offset-8 hover:text-secondary" href="/details">Details</a>
      <a class="mx-4 text-white underline-offset-8 hover:text-secondary" href="/features">Facilities</a>
      <a href="/book"><button class="px-4 py-2 m-4 font-bold transition-colors ease-out bg-white text-primary hover:bg-secondary hover:text-white"><FontAwesomeIcon class="pr-2" :icon="faCalendar" />Book Now</button>
    </a>
      </div>
  </div>
</header>

  <RouterView />
  

  <footer class="h-10 bg-gray-200 shadow dark:bg-gray-800">
    <div class="w-full p-2 mx-auto mt-10 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Lingayen Resorts and Hotel</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

</template>

<style>
#header {
  transition: height 0.3s;
}

#header.smaller-header {
  height: 70px;
}

#logo-section img {
  transition: height 0.3s;
}

#logo-section.smaller-header img {
  height: 36px;
}

#logo-section h2,
#menu-section a,
#menu-section button {
  transition: font-size 0.3s, margin 0.3s;
}

#header.smaller-header #logo-section h2,
#header.smaller-header #menu-section a,
#header.smaller-header #menu-section button {
  font-size: 0.7rem;
  margin: 5px;
  margin-top: 0;
}


</style>

<script>
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const logoSection = document.getElementById('logo-section');

  if (window.scrollY > 900) {
    header.classList.add('smaller-header');
    logoSection.classList.add('smaller-header');
  } else {
    header.classList.remove('smaller-header');
    logoSection.classList.remove('smaller-header');
  }
});

</script>