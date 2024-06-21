<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :class="['form-control', inputClass]"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "ReusableFormInput",
  props: {
    label: String,
    type: {
      type: String,
      default: "text"
    },
    id: String,
    placeholder: String,
    value: String,
    inputClass: {
      type: String,
      default: ""
    }
  },
  computed: {
    trimmedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value.trim());
      }
    }
  }
}
</script>


<style scoped>
.form-label {
  color: #f1c503;
}
</style>
