import './assets/main.css';

import { createApp } from 'vue';
import HomePage from './HomePage.vue';
import router from './router';



const app = createApp(HomePage);

app.use(router);
app.mount('#app');
