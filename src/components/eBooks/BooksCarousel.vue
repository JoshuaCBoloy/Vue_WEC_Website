<template>
  <div class="books-grid py-5">
    <div class="container">
      <h2 class="section-title mb-4">Popular eBooks</h2>
      <div id="booksCarousel" class="carousel slide">
        <div class="carousel-inner">
          <div v-for="(chunk, index) in bookChunks" :key="index" :class="['carousel-item', { active: index === 0 }]">
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="book in chunk" :key="book.id">
                <div class="card book-card">
                  <img :src="book.image" :alt="book.title" class="card-img-top" />
                  <div class="overlay">
                    <div class="overlay-content">
                      <h5 class="overlay-title"><b>{{ book.title }}</b></h5>
                      <p class="overlay-author">{{ book.author }}</p>
                      <button class="btn btn-primary" @click="openModal(book)">More Details</button>
                    </div>
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
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
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
      this.$emit('open-modal', book);
    }
  }
};
</script>

<style scoped>
.section-title {
  padding-bottom: 40px;
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
  height: 100%;
  width: 270px;
  border: none;
  overflow: hidden;
  border-radius: 13px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease-in-out;
}

.card-img-top {
  height: 400px;
  border-bottom: 2px solid #f1c503;
}

.card-img-top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rating {
  display: flex;
  gap: 2px;
  margin-bottom: 0;
  cursor: pointer;
}

.fa-star {
  color: #f1c503;
}

.fa-star.fas {
  color: #f1c503;
}

textarea {
  margin-top: 10px;
  resize: none;
}

.btn-primary {
  background-color: #f1c503;
  border: none;
  color: #110f0d;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 100%, 100%;
}

.carousel-control-prev {
  left: -5%;
}

.carousel-control-next {
  right: -4%;
}

.carousel-inner {
  transition: transform 0.5s ease-in-out;
}

.card.book-card {
  position: relative;
  overflow: hidden;
}

.card.book-card img {
  transition: transform 0.3s ease;
}

.card.book-card:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(4px);
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 12px;
}

.card.book-card:hover .overlay {
  top: 0;
  opacity: 1;
}

.overlay-content {
  text-align: center;
}

.overlay-title,
.overlay-author {
  margin: 0;
}
</style>
