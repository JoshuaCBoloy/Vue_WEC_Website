<template>
  <div class="modal fade" id="bookModal" tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true"
    ref="bookModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="bookModalLabel">{{ book.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="book.image" :alt="book.title" class="img-fluid mb-3" />
          <p><strong>Author:</strong> {{ book.author }}</p>
          <p>{{ book.description }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Read Now</button>
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
  background-color: #1c1c1c;
  color: #f1c503;
}

.modal-title {
  display: flex;
  justify-content: center;
}

.modal-footer .btn-primary {
  background-color: #f1c503;
  border: none;
  color: #110f0d;
}

.modal-title h5 {
  text-align: center;
}
</style>
