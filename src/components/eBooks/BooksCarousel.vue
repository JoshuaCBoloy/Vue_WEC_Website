<template>
  <div class="books-grid py-5">
    <div class="container">
      <h2 class="section-title mb-4">Popular eBooks</h2>
      <div id="booksCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(chunk, index) in bookChunks" :key="index" :class="['carousel-item', { active: index === 0 }]">
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="book in chunk" :key="book.id">
                <div class="card">
                  <img :src="book.image" :alt="book.title" class="card-img-top" />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title"><b>{{ book.title }}</b></h5>
                    <p class="card-text">{{ book.author }}</p>
                    <button class="btn btn-primary" @click="openModal(book)">Read Now</button>
                    <!-- <div class="rating">
                      <font-awesome-icon v-for="n in 5" :key="n" :icon="[book.userRating >= n ? 'fas' : 'far', 'star']"
                        class="fa-star" @click="setRating(book, n)" />
                    </div>
                    <textarea v-model="book.userComment" placeholder="Add a comment..." class="form-control"></textarea> -->

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
  components: {
  },
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
    setRating(book, rating) {
      book.userRating = rating;
    },
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
  /* Smooth transition */
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
  /* Reduce the clickable area */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 100%, 100%;
}

.carousel-control-prev {
  left: -5%;
  /* Adjust distance to move it farther */
}

.carousel-control-next {
  right: -4%;
  /* Adjust distance to move it farther */
}

.carousel-inner {
  transition: transform 0.5s ease-in-out;
  /* Smooth transition */
}
</style>
