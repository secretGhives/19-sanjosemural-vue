<template>
  <div id="app">

    <SiteNav class="nav-container"/>

    <transition name="fade">
      <router-view/>
    </transition>

  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav'

export default {
  name: 'App',
  components: {
    SiteNav
  }
}
</script>


<style lang="scss">
// @import '~/normalize-css/normalize.css';
@import '@/assets/styles/index.scss';

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
