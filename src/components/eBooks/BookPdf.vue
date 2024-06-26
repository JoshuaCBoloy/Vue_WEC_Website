<template>
  <div>
    <HeaderComponent />
    <div class="container pdf-container mt-4">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 text-center title">
          <h1>A Field Book of the Stars</h1>
          <p>Author</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="pdf-file col-12 col-md-10">
          <embed src="../../assets/images/ebooks-cover/5.pdf" type="application/pdf" width="100%" height="600px" />
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-md-10">
          <div class="comment-box">
            <textarea class="form-control" rows="5" placeholder="Write your comment here..."></textarea>
          </div>
          <div class="text-center mt-2">
            <button class="btn btn-primary">Leave a comment...</button>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '../FooterComponent.vue';
import HeaderComponent from '../HeaderComponent.vue';

export default {
  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style scoped>
.pdf-container {
  min-height: calc(100vh - 100px);
  padding-top: 100px;
}

.title h1 {
  font-size: 30px;
  font-weight: 400;
  color: #f1c503;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title p {
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pdf-file {
  margin-top: 20px;
  border: 1px solid #fff;
  width: 50%;
}

.comment-box {
  margin-top: 20px;
}

.comment-box textarea {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;
}

.text-center .btn {
  font-size: 16px;
  color: #000;
  padding: 10px 20px;
  background-color: #f1c503;
}
</style>
