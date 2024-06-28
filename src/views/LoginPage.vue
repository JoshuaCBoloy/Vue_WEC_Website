<template>
  <div class="login-container">
    <div class="form-container">
      <h1 class="login-text">Sign In</h1>
      <form @submit.prevent="handleSubmit">
        <h1 class="welcome-text">Welcome to Wisdom eBooks Club!</h1>
        <ReusableFormInput label="Email Address" type="email" id="email" placeholder="example@gmail.com"
          v-model.trim="email" />
        <ReusableFormInput label="Password" type="password" id="password" placeholder="Enter Password"
          v-model="password" />
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="rememberMe" v-model="rememberMe" />
          <label class="form-check-label text-white" for="rememberMe">Remember me</label>
        </div>
        <ReusableButton buttonClass="btn-primary">Login</ReusableButton>
      </form>
      <div class="alternatives">
          <p>Or login with:</p>
            <div>
              <button type="button" class="btn-google" @click="registerWithGoogle">
              <font-awesome-icon :icon="['fab', 'google']" />
              </button>
              <button type="button" class="btn-facebook" @click="registerWithFacebook">
              <font-awesome-icon :icon="['fab', 'facebook']" />
              </button>
            </div>
        </div>
        <div class="register">
          <p>Don't have an account? <router-link to="/register">Register Now</router-link></p>
        </div>
    </div>
  </div>
</template>

<script>
import ReusableFormInput from '../components/forms/ReusableFormInput.vue'
import ReusableButton from '../components/forms/ReusableButton.vue'

export default {
  name: "LoginPage",
  components: {
    ReusableFormInput,
    ReusableButton
  },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log("Form submitted", this.email, this.password, this.rememberMe);
    },

  }
}
</script>

<style scoped>
.login-container {
  background: #110f0d;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/images/wec-sign-in-2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 20px;
}

.form-container {
  max-width: 500px;
  width: 100%;
  margin: 50px 20px;
  padding: 20px;
  background-color: #110f0d;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #fff;
  font-family: "Glegoo", sans-serif;
  font-weight: 400;
  position: relative;
}

.text-white {
  color: #fff;
}

.terms {
  color: #fff;
}

.terms a {
  color: #f1c503;
}

.register {
  color: #fff;
  font-size: 12px;
  margin-top: 10px;
}

.register a {
  color: #f1c503;
}

.login-text {
  color: #f1c503;
  font-family: "Glegoo", sans-serif;
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 37px;
}

.welcome-text {
  color: #fff;
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
}

.btn-google {
  background-color: #fff;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.btn-facebook {
  background-color: #fff;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.btn-google .fa-google {
  color: #f1c503;
}

.btn-facebook .fa-facebook {
  color: #f1c503;
}

/* Ensure buttons look consistent */
.btn-google,
.btn-facebook {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  max-width: 140px;
}

.btn-google:hover,
.btn-facebook:hover {
  opacity: 0.9;
}

.alternatives {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.alternatives p {
  color: #f1c503;
  text-align: center;
  margin: 0;
}

.alternatives div {
  display: flex;
  justify-content: center;
  gap: 10px; /* Add space between buttons */
}
</style>