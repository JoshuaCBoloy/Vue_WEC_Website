<template>
  <div class="container">
    <NavbarComponent />
    <div class="parallel-container">
      <div class="parallel-header text-center my-4">
        <h1>Parallel: Side-by-Side Bible</h1>
        <div class="books">
          <div class="book-section">
            <h1>Exodus</h1>
            <select class="form-select" v-model="exodusVersion">
              <option value="KJV">King James Version</option>
              <option value="NIV">New International Version</option>
              <option value="ESV">English Standard Version</option>
              <!-- Add more versions as needed -->
            </select>
          </div>
          <div class="book-section">
            <h1>Numbers</h1>
            <select class="form-select" v-model="numbersVersion">
              <option value="KJV">King James Version</option>
              <option value="NIV">New International Version</option>
              <option value="ESV">English Standard Version</option>
              <!-- Add more versions as needed -->
            </select>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
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
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      exodusVersion: 'KJV',
      numbersVersion: 'KJV'
    };
  }
}
</script>

<style scoped>
.parallel-container {
  margin-top: 131px;
  height: 100vh;
}

.parallel-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.books {
  display: flex;
  gap: 40px;
}

.book-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.parallel-header h1 {
  font-size: 36px;
  font-weight: 400;
  color: #f1c503;
}

.form-select {
  margin-top: 10px;
  width: 200px;
}

.content-section {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background-color: #f8f9fa;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
