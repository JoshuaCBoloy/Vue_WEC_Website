<template>
  <button :class="['btn', buttonClass]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ReusableButton",
  props: {
    buttonClass: {
      type: String,
      default: "btn-primary"
    }
  }
}
</script>

<style scoped>
.btn-primary {
  background-color: #f1c503;
  border: none;
  color: #110f0d;
  font-family: "Glegoo", sans-serif;
  font-weight: 700;
}

.btn-primary:hover {
  background-color: #d6aa03;
}
</style>
