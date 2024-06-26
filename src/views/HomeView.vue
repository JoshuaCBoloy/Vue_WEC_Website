<template>
  <HeaderComponent />
  <HeroComponent />
  <FooterComponent />

</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import HeroComponent from '../components/HeroComponent.vue';


export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroComponent,
    FooterComponent
  }
}
</script>
