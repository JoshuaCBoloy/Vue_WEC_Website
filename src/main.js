import { createApp } from 'vue';
import App from './App.vue';
import HeaderComponent from './components/NavbarComponent.vue';
import LoginPage from './views/LoginPage.vue';
import RegisterPage from './views/RegisterPage.vue';
import './assets/styles/styles.css';
import './assets/styles/main.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import router from './router'
import FontAwesomeIcon from './plugins/font-awesome';



const app = createApp(App).use(router);


app.component(FontAwesomeIcon.name, FontAwesomeIcon);
app.component('HeaderComponent', HeaderComponent);
app.component('LoginPage', LoginPage);
app.component('RegisterPage', RegisterPage);


// Mount the app
app.mount('#app');