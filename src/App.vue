<template>
  <HeaderComponent />
  <!-- <HeroComponent /> -->
  <router-view />
</template>

<script>

import HeaderComponent from './views/HeaderComponent.vue';
// import HeroComponent from './views/HeroComponent.vue';

export default {
  name: "App",

  components: {
    HeaderComponent,
    // HeroComponent
  }
};
</script>


<style></style>
