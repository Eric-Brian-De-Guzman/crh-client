<script setup>

import { reactive, ref, useRouter } from 'vue';
const rooms = ref([])

import axios from 'axios'
axios.get('rooms').then(res => {
  rooms.value = res.data.data
})

const router = useRouter()

const roomId = ref()

const customer = reactive({
  last_name: "",
  first_name: "",
  middle_name: "",
  date: new Date(),
  timeIn: "",
  timeOut: "",
  contact_number: "",
  contact_email: "",
  room: roomId
})

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

function uploadBooking() {
  axios.post('/bookings', {data: customer})
  .then(() => {
    alert("Success! Redirecting you to our home page.")
    router.push("/")
  }).catch(() => {
    console.log("Failed")
    alert("Error, could not book. Please check your details")
  })
}

</script>

<template>
  <div class="pb-5 pl-5 pr-5 mx-auto mt-3 bg-white rounded-lg shadow-md w-fit">
    <h2 class="px-8 py-4 text-2xl font-bold text-center">Our Rooms and Facilities</h2>
    <table class="w-full max-w-4xl mx-auto border-2 border-white">
      <thead>
        <tr class="font-extrabold text-gray-800 bg-yellow-300 text-md">
          <th class=""></th>
          <th class="px-6 py-3">Room</th>
          <th class="px-6 py-3">Occupancy</th>
          <th class="px-6 py-3">Rates</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(room, index) in rooms" :key="index" class="border-b">
          <td class="px-6 py-2 border"><input name="room" type="radio" v-model="roomId" :value="room.id" /></td>
          <td class="px-6 py-2 border">{{ room.attributes.name }}</td>
          <td class="px-6 py-2 border">{{ room.attributes.occupancy }}</td>
          <td class="px-6 py-2 border">Php {{ room.attributes.rate }}.00</td>
        </tr>
      </tbody>
    </table>
    <div class="grid xl:grid-cols-3 gap-1.5 p-4 grid-cols-1">
      <div class="col-span-1">
        <label class="block pb-2.5" for="lastname">Last Name</label>
        <input class="block rounded-lg border py-1.5 pl-2 w-full" type="text" v-model="customer.last_name" />
      </div>
      <div class="col-span-1">
        <label class="block pb-2.5" for="firstname">First Name</label>
        <input class="block rounded-lg border py-1.5 pl-2 w-full" type="text" v-model="customer.first_name"/>
      </div>
      <div class="col-span-1">
        <label class="block pb-2.5" for="middlename">Middle Name</label>
        <input class="block rounded-lg border py-1.5 pl-2 w-full" v-model="customer.middle_name" type="text" />
      </div>
      <div class="col-span-1">
        <label for="date">Contact Number</label>
        <input class="block w-full rounded-lg border py-1.5 pl-2" type="text" v-model="customer.contact_number" />
      </div>
      <div class="col-span-1">
        <label for="date">Contact Email</label>
        <input class="block w-full rounded-lg border py-1.5 pl-2" type="text" v-model="customer.contact_email" />
      </div>
      <div class="col-span-1">
        <label for="date">Time In</label>
        <VueDatePicker v-model="customer.timeIn"></VueDatePicker>
      </div>
      <div class="col-span-1">
        <label for="date">Time Out</label>
        <VueDatePicker v-model="customer.timeOut"></VueDatePicker>      </div>
    </div>
    <div class="flex justify-end">
      <button 
      @click="uploadBooking()"
      class="flex px-4 py-2 m-4 font-bold transition-colors bg-yellow-300 rounded-sm hover:bg-yellow-500">Book
        Now</button>
    </div>
  </div>
</template>