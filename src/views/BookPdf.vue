<template>
  <div>
    <HeaderComponent />
    <div class="container pdf-container mt-4">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 text-center title">
          <h1>{{ bookTitle }}</h1>
          <p>{{ author }}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="pdf-file col-12 col-md-10">
          <div ref="viewer" style="width: 100%; height: 600px;"></div>
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
import WebViewer from '@pdftron/webviewer';
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/NavbarComponent.vue';
// import pdfFile from '@/assets/pdf-files/1.pdf';


export default {
  name: 'BookPdf',
  components: {
    FooterComponent,
    HeaderComponent
  },
  props: ['id'],
  data() {
    return {
      bookTitle: 'A Field Book of the Stars',
      author: 'Author',
      pdfPath: ''
    };
  },
  methods: {
  },
  mounted() {
    WebViewer({
      path: '/pdftron-lib', // Path to PDFTron WebViewer
      initialDoc: this.pdfPath,
    }, this.$refs.viewer)
      .then(instance => {
        const { docViewer } = instance;
        console.log(docViewer);
        console.log('PDF loaded');
      });
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
  width: 100%;
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
