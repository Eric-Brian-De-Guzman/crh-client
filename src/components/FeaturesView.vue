<script setup>
import LandingImage from './FeaturesView/LandingImage.vue';
import HeadingText from './FeaturesView/HeadingText.vue';
</script>
<template>
            
            <div>
    <LandingImage />
</div>
<div class="py-2">
    <HeadingText />
    <div class="flex justify-center pb-10 ">
    <img src="src/assets/hotel.jpg" />
</div>
<p class="text-center text-yellow-600 text-xl m-10"> Capitol Resort Hotel is a hotel and resort owned by the Provincial Government and situated in Lingayen, Pangasinan. It enjoys a prime location at the Capitol Complex, right by the beach.

The hotel provides a range of amenities including comfortable hotel rooms, refreshing swimming pools, a spacious garden, and a driving range with a putting green. Additionally, they have recently constructed a stylish luxury villa that can accommodate 4 to 5 individuals. The establishment ensures round-the-clock security, offers ample parking space, complimentary WiFi, and 24-hour room service for the convenience of guests.

Moreover, Capitol Resort & Hotel boasts two function halls that are ideal for hosting weddings, debuts, birthdays, baptisms, and other special events. Additionally, they feature a conference room suitable for meetings, seminars, and conferences.</p>
<header class="text-center text-2xl text-yellow-500 font-bold" >Facilities:</header>
    <ul class="text-center text-xl">
        <li>Function</li>
        <li>Restaurant</li>
        <li> Dining Bar</li>
        <li> Swimming Pools</li> 
        <li>Dependable Security</li>
         <li>Ample Parking Space</li>
          <li>Wide Garden</li>
           <li> 24 Hours Working Space</li>
    </ul>
    
</div>
<header class="text-xl text-center font-bold  text-yellow-600"> Check-in: 1:00pm </header>
    <header class="text-xl text-center font-bold text-yellow-600"> Check-out: 12 noon </header>
<div class=" flex justify-center">

  <table class="table-auto text-xl  mx-auto">
    <thead>
      <tr>
        <th class="px-4 py-2 text-yellow-600">ROOM</th>
        <th class="px-4 py-2  text-yellow-600">OCCUPANCY</th>
        <th class="px-4 py-2  text-yellow-600">RATES</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border px-4 py-2">Matrimonial Bedroom</td>
        <td class="border px-4 py-2">Single Occupancy</td>
        <td class="border px-4 py-2">Php. 700</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Matrimonial Bedroom</td>
        <td class="border px-4 py-2">Double Occupancy</td>
        <td class="border px-4 py-2">Php. 800</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Twin Sharing Bedroom</td>
        <td class="border px-4 py-2">2 Persons</td>
        <td class="border px-4 py-2">Php. 800</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Triple Sharing Bedroom</td>
        <td class="border px-4 py-2">4 Persons</td>
        <td class="border px-4 py-2">Php. 1,500</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Dormitory</td>
        <td class="border px-4 py-2">8 Persons</td>
        <td class="border px-4 py-2">Php. 2,400</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Villa</td>
        <td class="border px-4 py-2">4 - 5 Persons</td>
        <td class="border px-4 py-2">Php. 4,000</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Extra Bed/ Person</td>
        <td class="border px-4 py-2">-</td>
        <td class="border px-4 py-2">Php. 200</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="flex justify-center pt-20">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15338.439768516191!2d120.227965!3d16.033808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33915e69bef5c22b%3A0x1a51a42c0afbb144!2sCapitol%20Resort%20Hotel!5e0!3m2!1sen!2sus!4v1687692640773!5m2!1sen!2sus" width="1000" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</template>
