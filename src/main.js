import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import getError from "./methods/getError.js";
import fetch from "./methods/fetch.js";


const app = createApp(App).use(router);

app.config.globalProperties.getError = getError;
app.config.globalProperties.fetch = fetch;

app.mount('#app');
