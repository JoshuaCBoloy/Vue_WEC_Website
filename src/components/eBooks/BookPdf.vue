<template>
  <div class="pdf-viewer">
    <iframe :src="pdfUrl" width="100%" height="100%" style="border:none;"></iframe>
  </div>
</template>

<script>
export default {
  name: 'PdfViewerPage',
  data() {
    return {
      pdfUrl: ''
    };
  },
  created() {
    // Get the PDF URL from the route params
    this.pdfUrl = this.$route.params.pdfUrl;
  }
};
</script>

<style scoped>
.pdf-viewer {
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
