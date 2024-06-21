import { createApp } from 'vue';
import App from './App.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import './assets/styles/styles.css';
import './assets/styles/main.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import router from './router'



const app = createApp(App).use(router);


app.component('HeaderComponent', HeaderComponent);
app.component('LoginPage', LoginPage);
app.component('RegisterPage', RegisterPage);


// Mount the app
app.mount('#app');