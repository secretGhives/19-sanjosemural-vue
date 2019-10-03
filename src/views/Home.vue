<template>
  <div class="home">
    <div class="overlay">
      <img src="@/assets/images/logo_rooster-full.svg" class="logo" alt="Rooster Logo Full">
      <h1 class="title">{{company}}</h1>
    </div>
    <!-- <div class="slider">
    </div> -->

    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        // centeredSlides: true,
        speed: 1800,
        autoplay: {
          delay: 2300,
          disableOnInteraction: false
        },
        effect: 'fade', // slide, fade, cube, coverflow, flip
        loop: true,
      }
    }
  },
  computed: {
    company() {
      return this.$store.state.company
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(2, 1800, false)
    // console.dir(this.swiper.params);
    // this.swiper.updateSize()
    // this.swiper.update()
    // this.swiper.updateSlides()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.home {
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  overflow: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.overlay {
  z-index: 2;
  // background: linear-gradient(#fff, #fff0);
  // background: linear-gradient(180deg, rgba(2,0,36,0.81) 0%, rgba(255,255,255,0.63) 18%, rgba(255,0,0,0.5) 50%, rgba(255,255,255,1) 81%, rgba(2,0,36,0.18) 100%);
  mix-blend-mode: overlay;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  > .title { color: $color-white; }
  > img {
    width: 81px;
  }
}

.swiper-container {
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  &.slide-1 {
    background-image: url('../assets/images/murals/6.jpg')
  }
  &.slide-2 {
    background-image: url('../assets/images/murals/3.jpg')
  }
  &.slide-3 {
    background-image: url('../assets/images/murals/5.jpg')
  }
  &.slide-4 {
    background-image: url('../assets/images/murals/4.jpg')
  }
  &.slide-5 {
    background-image: url('../assets/images/murals/2.jpg')
  }
}
</style>