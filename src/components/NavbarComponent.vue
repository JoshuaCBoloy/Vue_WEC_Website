<template>
  <header id="header" class="header d-flex align-items-center fixed-top" v-if="showHeader">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="/home" class="logo d-flex align-items-center me-auto me-lg-0">
        <img src="../assets/images/wisdom-dark.png" alt="">
        <h1 class="sitename">Wisdom e<span>B</span>ooks Club</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
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
              <li><router-link to="/ebooks">Book Categories</router-link></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>eStudy Bible</span> <i
                class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><router-link to="/parallel">Parallel: Side-by-Side Bible</router-link></li>
              <li><router-link to="/kingjames">King James Hebrew-Greek Interlinear Bible</router-link></li>
              <li><router-link to="crossreference">Cross-Reference Bible</router-link></li>
              <li><router-link to="wisdombible">Wisdom Bible Plus</router-link></li>
              <li><router-link to="bibleatlas">Bible Atlas</router-link></li>
            </ul>
          </li>
          <li><router-link to="/login">Login</router-link></li>

        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      <a class="btn-getstarted" href="#">Subscribe</a>
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
}
</script>

<style scoped></style>
