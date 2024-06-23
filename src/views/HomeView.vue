<template>
  <HeaderComponent />
  <HeroComponent />
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import HeroComponent from './HeroComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroComponent
  }
}
</script>
