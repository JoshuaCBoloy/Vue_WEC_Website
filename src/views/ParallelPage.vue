<template>
  <div class="container custom-container">
    <NavbarComponent />
    <div class="settings-icons">
      <div class="filter-icon" @click="handleFirstIconClick">
        <i class="bi bi-filter"></i>
      </div>
      <div class="layer-icon" @click="handleSecondIconClick">
        <i class="bi bi-layers-fill"></i>
      </div>
      <div class="next-icon" @click="handleNextPageClick">
        <i class="bi bi-chevron-right"></i>
      </div>
    </div>
    <div class="parallel-container">
      <div class="parallel-header text-center my-4">
        <h1>Parallel: Side-by-Side Bible</h1>
      </div>
      <nav class="navbar navbar-expand-lg justify-content-center">
        <ul class="nav justify-content-center">
          <li class="dropdown">
            <div class="dropdown-toggle">
              <h1 id="selected-book">Genesis</h1>
            </div>
            <ul class="dropdown-menu">
              <li v-for="book in books" :key="book">{{ book }}</li>
            </ul>
          </li>
          <li class="dropdown">
            <div class="dropdown-toggle">
              <h1 id="selected-chapter">1</h1>
            </div>
            <ul class="dropdown-menu">
              <li v-for="chapter in chapters" :key="chapter">{{ chapter }}</li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="viewer">
            <select class="form-select form-select-sm bible-viewer version-dropdown">
              <option selected>English</option>
              <option>English</option>
              <option>English</option>
              <option>English</option>
            </select>
            <div class="content-section">
              <h2>Left Column</h2>
              <p>Content for the left column goes here.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5">
          <div class="viewer">
            <select class="form-select form-select-sm bible-viewer version-dropdown">
              <option selected>English</option>
              <option>English</option>
              <option>English</option>
              <option>English</option>
            </select>
            <div class="content-section">
              <h2>Right Column</h2>
              <p>Content for the right column goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      books: [
        "Genesis",
        "Exodus",
        "Leviticus",
        "Numbers",
        "Deuteronomy",
        "Joshua",
        "Judges",
        "Ruth",
        "1 Samuel",
        "2 Samuel",
        "1 Kings",
        "2 Kings",
        "1 Chronicles",
        "2 Chronicles",
        "Ezra",
        "Nehemiah",
        "Esther",
        "Job",
        "Psalms",
        "Proverbs",
        "Ecclesiastes",
        "Song of Solomon",
        "Isaiah",
        "Jeremiah",
        "Lamentations",
        "Ezekiel",
        "Daniel",
        "Hosea",
        "Joel",
        "Amos",
        "Obadiah",
        "Jonah",
        "Micah",
        "Nahum",
        "Habakkuk",
        "Zephaniah",
        "Haggai",
        "Zechariah",
        "Malachi",
        "Matthew",
        "Mark",
        "Luke",
        "John",
        "Acts",
        "Romans",
        "1 Corinthians",
        "2 Corinthians",
        "Galatians",
        "Ephesians",
        "Philippians",
        "Colossians",
        "1 Thessalonians",
        "2 Thessalonians",
        "1 Timothy",
        "2 Timothy",
        "Titus",
        "Philemon",
        "Hebrews",
        "James",
        "1 Peter",
        "2 Peter",
        "1 John",
        "2 John",
        "3 John",
        "Jude",
        "Revelation",
      ],
      chapters: Array.from({ length: 50 }, (_, i) => i + 1), // Assuming Genesis has 50 chapters
    };
  },
  methods: {
    handleFirstIconClick() {
      // Handle the first icon click
    },
    handleSecondIconClick() {
      // Handle the second icon click
    },
    handleNextPageClick() {
      // Handle the next page icon click
    },
  },
};
</script>

<style scoped>
h1 {
  font-size:20px;
  font-weight: 700;
}
.custom-container {
  margin: 20px auto;
  padding: 20px;
  max-width: 100%;
  background-color: #f4f0db;
  position: relative;
  /* Needed for the icons to be positioned relative to this container */
}

.settings-icons {
  position: absolute;
  top: 100px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-icon {
  width: 40px;
  height: 40px;
  background-color: #f1c053;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.layer-icon {
  width: 40px;
  height: 40px;
  background-color: #f1c053;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.next-icon {
  width: 40px;
  height: 40px;
  background-color: #f1c053;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.parallel-container {
  margin-top: 131px;
}

.parallel-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallel-header h1 {
  font-size: 27px;
  font-weight: 400;
  color: #000;
}

.nav {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.dropdown-toggle i {
  visibility: hidden;
  transition: visibility 0.3s;
}

.dropdown-toggle:hover i {
  visibility: visible;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-menu li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.parallel-header h1 {
  font-size: 36px;
  font-weight: 400;
  color: #000;
}

.form-select {
  margin-top: 10px;
  width: 100%; /* Use 100% width */
  font-size: 17px;
  text-align: center;
  border-radius: 25px;
}

.version-dropdown {
  width: 100%; /* 100% width to match parent container */
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.viewer {
  width: 100%; /* Ensure viewer takes full width of parent */
  text-align: center; /* Center the content */
}

.content-section {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background-color: #f8f9fa;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
  width: 100%; /* 100% width to match parent container */
}
</style>
