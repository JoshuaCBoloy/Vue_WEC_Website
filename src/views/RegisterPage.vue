<template>
  <div class="login-container">
    <div class="form-container">
      <h1 class="login-text">Register</h1>
      <form @submit.prevent="handleSubmit">
        <h1 class="welcome-text">Be a part of Wisdom eBooks Club!</h1>
        <ReusableFormInput label="First Name" type="text" id="first" placeholder="Enter you First Name"
          v-model.trim="firstName" />
        <ReusableFormInput label="Last Name" type="text" id="last" placeholder="Enter you Last Name"
          v-model.trim="lastName" />
        <ReusableFormInput label="Email Address" type="email" id="email" placeholder="example@gmail.com"
          v-model.trim="email" />
        <ReusableFormInput label="Password" type="password" id="password" placeholder="Enter Password"
          v-model="password" />
        <ReusableFormInput label="Confirm Password" type="password" id="confirmPassword" placeholder="Confirm Password"
          v-model="confirmPassword" />
        <div class="terms">
          <p>By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
        </div>
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
        <ReusableButton buttonClass="btn-primary" @click="handleSubmit">
          Register
        </ReusableButton>
      </form>
    </div>
  </div>
</template>

<script>
import ReusableFormInput from '../components/forms/ReusableFormInput.vue'
import ReusableButton from '../components/forms/ReusableButton.vue'

export default {
  name: "RegisterPage",
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
    }
  }
}
</script>

<style scoped>
.login-container {
  background: #110f0d url("../assets/images/wec-sign-in-2.png") no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.form-container {
  max-width: 500px;
  width: 100%;
  margin: 50px 20px;
  padding: 20px;
  background-color: rgba(17, 15, 13, 0.95);
  /* Add transparency to form container */
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

/* Buttons */
.btn-google {
  background-color: #fff;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.btn-facebook {
  background-color: #3b5998;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.btn-google .fa-google {
  color: #db4437;
}

.btn-facebook .fa-facebook {
  color: #fff;
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
