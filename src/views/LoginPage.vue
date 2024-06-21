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
        <div class="register">
          <p>Don't have an account? <router-link to="/register">Register Now</router-link></p>
        </div>
        <ReusableButton buttonClass="btn-primary">Login</ReusableButton>

      </form>
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
</style>