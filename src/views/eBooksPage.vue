<template>
  <HeaderComponent />
  <router-view />
</template>

<script>

import HeaderComponent from './HeaderComponent.vue';

export default {
  name: "eBooksPage",
  components: {
    HeaderComponent
  }
};
</script>

<style scoped></style>