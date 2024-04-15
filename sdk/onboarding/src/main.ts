import './styles.css';

import { createApp } from 'vue';
import App from './app/App.vue';
import PrimeVue from 'primevue/config'
export const app = createApp(App);
app.use(PrimeVue)
app.mount('#root');
