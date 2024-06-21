<template>
  <header id="header" class="header d-flex align-items-center fixed-top" v-if="showHeader">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center me-auto me-lg-0">
        <img src="../assets/images/wisdom-dark-no-title.png" alt="">
        <h1 class="sitename">Wisdom e<span>B</span>ooks Club</h1>
        <span></span>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li class="dropdown"><a href="#"><span>Pearls of Wisdom</span> <i
                class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Pearls of Wisdom</a></li>
              <li class="dropdown"><a href="#"><span>Ancient Hebrew Calendar</span> <i
                    class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li class="dropdown"><a href="#"><span>Georgia</span> <i
                        class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">2021</a></li>
                      <li><a href="#">2022</a></li>
                      <li><a href="#">2023</a></li>
                      <li><a href="#">2024</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a href="#"><span>Israel</span> <i
                        class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">2021</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Wisdom Blogs</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>eBooks</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><router-link to="/ebooks">Book Library</router-link></li>
              <li><a href="#">Book Categories</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>eStudy Bible</span> <i
                class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Parallel: Side-by-Side Bible </a></li>
              <li><a href="#">King James Hebrew-Greek Interlinear Bible</a></li>
              <li><a href="#">Cross-Reference Bible</a></li>
              <li><a href="#">Wisdom Bible Plus</a></li>
              <li><a href="#">Bible Atlas</a></li>
            </ul>
          </li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      <a class="btn-getstarted" href="index.html#about">Subscribe</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true
    }
  },
  name: "HeaderComponent",
  watch: {
    $route(to) {
      this.updateHeaderVisibility(to.path);
    }
  },
  mounted() {
    this.updateHeaderVisibility(this.$route.path);
  },
  methods: {
    updateHeaderVisibility(path) {
      const noHeaderRoutes = ['/login', '/register'];
      this.showHeader = !noHeaderRoutes.includes(path);
    }
  }
}
</script>

<style scoped></style>
