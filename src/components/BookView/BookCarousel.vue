<template>
    <swiper
      :slides-per-view="3"
      :space-between="40"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><img class="max-w-full mt-5 rounded-lg h-96" src="../../assets/baywalk.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="max-w-full mt-5 rounded-lg h-96" src="../../assets/crh.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="max-w-full mt-5 rounded-lg h-96" src="../../assets/Lingayen_Cathedral_2019.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="max-w-full mt-5 rounded-lg h-96" src="../../assets/IMG_6871.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="max-w-full mt-5 rounded-lg h-96" src="../../assets/BANAAN.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="max-w-full mt-5 rounded-lg h-96" src="../../assets/licensed-image.jpg" alt=""></swiper-slide>
      ...
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
    };
  </script>