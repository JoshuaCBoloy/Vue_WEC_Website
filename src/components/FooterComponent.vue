<template>
  <footer class="bg-dark text-white mt-5 p-4 text-center">
    <div class="footer-container">
      <div class="row">
        <div class="col-md-2">
          <h5>Wisdom e<span>B</span>ooks Club</h5>
          <ul class="list-unstyled">
            <li><a href="mailto:support@wisdomebooksclub.com" class="text-white">Email: support@wisdomebooksclub.com</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>Useful Links</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">About Us</a></li>
            <li><a href="#" class="text-white">Contact Us</a></li>
            <li><a href="#" class="text-white">Terms of Service</a></li>
            <li><a href="#" class="text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>eBooks</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Book Library</a></li>
            <li><a href="#" class="text-white">Book Categories</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>eStudy Bible</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Parallel: Side-by-Side Bible</a></li>
            <li><a href="#" class="text-white">King James Hebrew-Greek Interlinear Bible</a></li>
            <li><a href="#" class="text-white">Cross-Reference Bible</a></li>
            <li><a href="#" class="text-white">Wisdom Bible Plus</a></li>
            <li><a href="#" class="text-white">Bible Atlas</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>Pearls of Wisdom</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Ancient Hebrew Calendar</a></li>
            <li><a href="#" class="text-white">Wisdom Blogs</a></li>
          </ul>
        </div>
      </div>
      <hr class="bg-white">
      <p class="mb-0">© 2024 Wisdom eBooks Club. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer {
  position: relative;
  width: 100%;
  bottom: 0;
}


.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-container span {
  color: #f1c503;
}
</style>
