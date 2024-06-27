<template>
  <NavbarComponent />

  <body>
    <div class="parallel-container">
      <div class="parallel-header text-center my-4">
        <h1>Parallel</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="content-section">
            <h2>Left Column</h2>
            <p>Content for the left column goes here.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="content-section">
            <h2>Right Column</h2>
            <p>Content for the right column goes here.</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent
  }
}
</script>

<style scoped>
.parallel-container {
  margin-top: 131px;
}

.parallel-header h1 {
  font-size: 36px;
  font-weight: 400;
  color: #f1c503;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-section {
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background-color: #f8f9fa;
  margin-bottom: 1rem;
}
</style>
