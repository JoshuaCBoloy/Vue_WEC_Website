<template>
  <HeaderComponent />

  <body>
    <div class="ebooks-page">
      <!-- Featured Book Section -->
      <section class="featured-book text-center text-white py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src="../assets/images/ebooks-cover/5.png" alt="Featured Book" class="img-fluid rounded" />
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center">
              <h1 class="display-4">A Field Book of the Stars</h1>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores soluta excepturi vero,
                harum labore quos libero iure natus error omnis iusto provident laudantium culpa quis eum mollitia
                assumenda ipsa veritatis consectetur ea. Maiores quia nam distinctio iure aspernatur, illo excepturi
                eligendi nesciunt voluptatibus consequatur aliquid facilis, animi quo officiis ex.</p>
              <div class="buttons d-flex mt-2">
                <button class="btn btn-primary m-2" @click="openModal(featuredBook)">
                  <i class="bi bi-play-fill" style="color: black; padding: 0%;"></i> Read Now
                </button>
                <button class="btn btn-secondary m-2">
                  <i class="bi bi-info-circle" style="padding: 0%;"></i> More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Books Carousel Section -->
      <section class="books-grid py-5">
        <div class="container">
          <h2 class="section-title mb-4">Popular eBooks</h2>
          <div id="booksCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(chunk, index) in bookChunks" :key="index"
                :class="['carousel-item', { active: index === 0 }]">
                <div class="row">
                  <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="book in chunk" :key="book.id">
                    <div class="card">
                      <img :src="book.image" :alt="book.title" class="card-img-top" />
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title"><b>{{ book.title }}</b></h5>
                        <p class="card-text">{{ book.author }}</p>
                        <button class="btn btn-primary mt-auto" @click="openModal(book)">Read Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#booksCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#booksCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Book Details Modal -->
      <BookModal :book="selectedBook" ref="bookModal" />
    </div>
  </body>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import BookModal from '../components/BookModal.vue';

export default {
  name: "eBooksPage",
  components: {
    HeaderComponent,
    BookModal,
  },
  data() {
    return {
      books: [
        { id: 1, title: "A Brief Account of the Rise and Progress of the People Called Quakers", author: "William Pen", image: require('../assets/images/ebooks-cover/1.png'), description: "Description for Book 1" },
        { id: 2, title: "A Comparative View of Religions", author: "Johannes Henricus Scholten", image: require('../assets/images/ebooks-cover/2.png'), description: "Description for Book 2" },
        { id: 3, title: "A Critical Exposition of the Popular Jihad", author: "Moulavi Gheragh Ali", image: require('../assets/images/ebooks-cover/3.png'), description: "Description for Book 3" },
        { id: 4, title: "A Dictionary of Symbols", author: "J.E. Cirlot", image: require('../assets/images/ebooks-cover/4.png'), description: "Description for Book 4" },
        { id: 5, title: "A Field Book of the Stars", author: "William Tyler Olcott", image: require('../assets/images/ebooks-cover/5.png'), description: "Description for Book 5" },
        { id: 6, title: "A Genesis Apocryphon", author: "Nahman Avigad and Yigael Yadin", image: require('../assets/images/ebooks-cover/6.png'), description: "Description for Book 6" },
        { id: 7, title: "A History of American Christianity", author: "Leonard Woolsey Bacon", image: require('../assets/images/ebooks-cover/7.png'), description: "Description for Book 7" },
        { id: 8, title: "A History of Indian Philosophy, Volume 1", author: "Surendranath Dasgupta", image: require('../assets/images/ebooks-cover/8.png'), description: "Description for Book 8" }
      ],
      selectedBook: {}, // Initialize an empty object for the selected book
      featuredBook: { // Data for the featured book
        id: 5,
        title: "A Field Book of the Stars",
        author: "William Tyler Olcott",
        image: require('../assets/images/ebooks-cover/5.png'),
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores soluta excepturi vero, harum labore quos libero iure natus error omnis iusto provident laudantium culpa quis eum mollitia assumenda ipsa veritatis consectetur ea."
      }
    };
  },
  computed: {
    bookChunks() {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < this.books.length; i += chunkSize) {
        chunks.push(this.books.slice(i, i + chunkSize));
      }
      return chunks;
    }
  },
  methods: {
    openModal(book) {
      this.selectedBook = book; // Assign the clicked book to the selectedBook data property
      this.$refs.bookModal.showModal(); // Call the showModal method in the BookModal component
    }
  }
};
</script>

<style scoped>
body {
  background-color: #110f0d;
}

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

.section-title h2 {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  display: inline-block;
}

.card {
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 270px;
  border: none;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel {
  display: flex;
  justify-content: space-between;
  width:100%;
  height:100%;
}

.card-img-top {
  height: 300px;
  border-bottom: 2px solid #f1c503;
}

.card-img-top img {
  width: 80%;
  height: 100%;
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

.lead {
  font-size: 14px;
}
</style>
