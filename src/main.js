import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import axios from 'axios';

// 👇 ESTA LÍNEA DEBE IR AQUÍ
axios.defaults.withCredentials = true;

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);

app.use(router)
app.use(pinia)
app.mount('#app')
