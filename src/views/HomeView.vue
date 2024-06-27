<template>
  <NavbarComponent />
  <HeroComponent />
  <FooterComponent />

</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import HeroComponent from '../components/HeroComponent.vue';


export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    HeroComponent,
    FooterComponent
  }
}
</script>
