<template>
  <div>
    <HeaderComponent />
    <div class="pdf-container">

    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '../FooterComponent.vue';
import HeaderComponent from '../HeaderComponent.vue';

export default {
  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style scoped></style>