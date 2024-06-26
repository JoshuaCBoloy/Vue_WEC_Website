<template>
  <footer class="text-white mt-5 p-4 text-center">
    <div class="footer-container container">
      <div class="row text-center text-md-left justify-content-center">
        <div class="col-md-2 mb-4 d-flex flex-column align-items-center">
          <h5>Wisdom e<span>B</span>ooks Club</h5>
          <ul class="list-unstyled">
            <li><a href="mailto:support@wisdomebooksclub.com">Email: support@wisdomebooksclub.com</a></li>
          </ul>
          <div class="social-icons d-flex justify-content-center">
            <a href="#" class="mx-2"><i class="fab fa-twitter"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-instagram"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-youtube"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <div class="col-md-2 mb-4 d-flex flex-column align-items-center">
          <h5>Useful Links</h5>
          <ul class="list-unstyled">
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>About Us</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Contact Us</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Terms of Service</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-md-2 mb-4 d-flex flex-column align-items-center">
          <h5>eBooks</h5>
          <ul class="list-unstyled">
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Book Library</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Book Categories</a></li>
          </ul>
        </div>
        <div class="col-md-2 mb-4 d-flex flex-column align-items-center">
          <h5>eStudy Bible</h5>
          <ul class="list-unstyled">
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Parallel: Side-by-Side Bible</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>King James Hebrew-Greek Interlinear Bible</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Cross-Reference Bible</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Wisdom Bible Plus</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Bible Atlas</a></li>
          </ul>
        </div>
        <div class="col-md-2 mb-4 d-flex flex-column align-items-center">
          <h5>Pearls of Wisdom</h5>
          <ul class="list-unstyled">
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Ancient Hebrew Calendar</a></li>
            <li><a href="#"><i class="fas fa-arrow-right me-2"></i>Wisdom Blogs</a></li>
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
  background-color: #696969;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-container span {
  color: #f1c503;
}

h5 {
  font-size: 15px;
}

ul {
  padding: 0;
}

a {
  display: inline-block;
  margin: 5px 0;
  font-size: 13px;
  text-decoration: none;
  position: relative;
  padding-left: 0; /* Removed left padding to align the arrow with text */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
  color: #fff
}

a:hover {
  width: 108%;
  background-color: #fff; /* Background effect on hover */
  border-radius: 15px; /* Optional: Rounded corners */
  color: #f1c503; /* Optional: Change text color on hover */
}

a i.fa-arrow-right {
  margin-right: 5px; /* Added right margin to create space between arrow and text */
  color: #f1c503;
  font-size: 0.8rem;
}

.social-icons a {
  margin: 0 10px;
}

i {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .footer-container .row {
    text-align: center;
  }
  
  .footer-container .col-md-2 {
    margin-bottom: 20px;
  }
}
</style>
