<template>
  <div class="modal fade" id="bookModal" tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true"
    ref="bookModal">
    <div class="modal-dialog modal-xl modal-dialog-centered"> <!-- Use modal-xl for extra width and center alignment -->
      <div class="modal-content custom-modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4 image-container">
              <div class="image-and-button">
                <img :src="book.image" :alt="book.title" class="img-fluid img-thumbnail" />
                <button type="button" class="btn btn-primary read-book-btn">Read Book</button>
              </div>
            </div>
            <div class="col-md-8 text-container">
              <h5 class="modal-title" id="bookModalLabel">{{ book.title }}</h5>
              <span>N/A</span>
              <p><strong>Author:</strong> {{ book.author }}</p>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium
                asperiores doloribus repellendus dolore suscipit quisquam odit eligendi, quae quas
                voluptatum provident quod nam placeat qui commodi unde veniam. Magnam!
              </p>
              <p class="small-font"><strong>Publish Date:</strong> {{ book.publishDate }}</p>
              <p class="small-font"><strong>Publisher:</strong> {{ book.publisher }}</p>
              <div class="category">
                <p class="category-border">Category</p>
                <p class="category-border">Category</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

export default {
  name: 'BookModal',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    showModal() {
      this.$nextTick(() => {
        const modal = new window.bootstrap.Modal(this.$refs.bookModal);
        modal.show();
      });
    },
    hideModal() {
      const modal = new window.bootstrap.Modal(this.$refs.bookModal);
      modal.hide();
    }
  }
};
</script>

<style scoped>
.modal-content {
  text-align: center;
  color: #fff;
  background-color: rgba(28, 28, 28, 0.8);
  /* Semi-transparent background */
  backdrop-filter: blur(10px);
  /* Blur effect */
  border: none;
  /* Remove border */
  overflow: hidden;
  /* Prevent content overflow */
  margin-top: -200px
}

.modal-header {
  border-bottom: none;
  /* Remove header border */
  display: flex;
  justify-content: flex-end;
  /* Align close button to the right */
}

.modal-title {
  text-align: left;
  color: #fff;
  font-size: 34px;
  margin: 0;
  /* Remove margin */
}

.img-fluid {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.img-thumbnail {
  max-height: 300px;
  width: 100%;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-and-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.read-book-btn {
  background-color: #f1c503;
  border: none;
  color: #110f0d;
  width: 80%;
  border-radius: 25px;
  margin-top: 10px;
  /* Margin between image and button */
}

.text-container {
  padding: 20px;
  text-align: left;
  margin-top: -30px;
}

/* Override Bootstrap .btn-close to make it white */
.btn-close-white {
  filter: invert(1);
}

.description {
  font-size: 14px;
}

span {
  color: #f1c503;
}

.small-font {
  font-size: 15px;
}

.category {
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 12px;
}

.category-border {
  background-color: #f1c503;
  border-radius: 25px;
  padding: 5px 10px;
  /* Adjust padding */
  color: black;
  font-weight: 400;
}

/* Additional custom styles for wider modal */
@media (min-width: 992px) {
  .modal-xl {
    max-width: 80%;
    /* Adjust the percentage as needed */
  }
}
</style>
