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
                Play
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
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="book in books" :key="book.id">
            <div class="card h-100">
              <img :src="book.image" :alt="book.title" class="card-img-top" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ book.title }}</h5>
                <p class="card-text">{{ book.author }}</p>
                <button class="btn btn-primary mt-auto" @click="openModal(book)">Read Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Book Details Modal -->
    <div class="modal fade" id="bookModal" tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true"
      ref="bookModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="bookModalLabel">{{ selectedBook.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img :src="selectedBook.image" :alt="selectedBook.title" class="img-fluid mb-3" />
            <p><strong>Author:</strong> {{ selectedBook.author }}</p>
            <p>{{ selectedBook.description }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Read Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
  name: "eBooksPage",
  components: {
    HeaderComponent
  },
  data() {
    return {
      books: [
        { id: 1, title: "Book 1", author: "Author 1", image: "../assets/images/bible.png", description: "Description for Book 1" },
        { id: 2, title: "Book 2", author: "Author 2", image: "../assets/images/bible.png", description: "Description for Book 2" },
        { id: 3, title: "Book 3", author: "Author 3", image: "../assets/images/bible.png", description: "Description for Book 3" },
        { id: 4, title: "Book 4", author: "Author 4", image: "../assets/images/bible.png", description: "Description for Book 4" },
        { id: 5, title: "Book 5", author: "Author 5", image: "../assets/images/bible.png", description: "Description for Book 5" },
        { id: 6, title: "Book 6", author: "Author 6", image: "../assets/images/bible.png", description: "Description for Book 6" },
        { id: 7, title: "Book 7", author: "Author 7", image: "../assets/images/bible.png", description: "Description for Book 7" },
        { id: 8, title: "Book 8", author: "Author 8", image: "../assets/images/bible.png", description: "Description for Book 8" }
      ],
      selectedBook: {}
    };
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
  color: #f1c503;
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
