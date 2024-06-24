<template>
  <HeaderComponent />
  <div class="ebooks-page">
    <!-- Featured Book Section -->
    <section class="featured-book text-center text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/images/logo_icon_design_1.gif" alt="Featured Book" class="img-fluid rounded" />
          </div>
          <div class="col-md-6 d-flex flex-column justify-content-center">
            <h1 class="display-4">Featured Book Title</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores soluta excepturi vero,
              harum labore quos libero iure natus error omnis iusto provident laudantium culpa quis eum mollitia
              assumenda ipsa veritatis consectetur ea. Maiores quia nam distinctio iure aspernatur, illo excepturi
              eligendi nesciunt voluptatibus consequatur aliquid facilis, animi quo officiis ex.</p>
            <div class="buttons d-flex mt-2">
              <button class="btn btn-primary m-2"> <i class="bi bi-play-fill" style="color: black; padding: 0%; "></i>
                Read
                Now </button>
              <button class="btn btn-secondary m-2"><i class="bi bi-info-circle" style=" padding: 0%;"></i> More
                Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Books Grid Section -->
    <section class="books-grid py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-dark mb-4">Popular eBooks</h2>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img src="../assets/images/bible.png" alt="Book 1" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book 1</h5>
                <p class="card-text">Author 1</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img src="../assets/images/bible.png" alt="Book 2" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book 2</h5>
                <p class="card-text">Author 2</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img src="../assets/images/bible.png" alt="Book 3" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book 3</h5>
                <p class="card-text">Author 3</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img src="../assets/images/bible.png" alt="Book 4" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book 4</h5>
                <p class="card-text">Author 4</p>
              </div>
            </div>
          </div>
          <!-- Add more static book cards here -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
  name: "eBooksPage",
  components: {
    HeaderComponent
  },
};
</script>

<style scoped>
.ebooks-page {
  margin-top: 131px;
  font-family: "Glegoo", sans-serif;
}

.featured-book {
  background-color: #100f0d;
}

.books-grid {
  background-color: #110f0d;
}

.books-grid .section-title {
  padding-bottom: 60px;
  position: relative;
  color: #f1c503
}

.card {
  border: none;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}

.buttons {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  font-family: "Nunito", sans-serif;
}

.btn-primary {
  background-color: #f1c503;
  border: none;
  color: #110f0d;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
}
</style>