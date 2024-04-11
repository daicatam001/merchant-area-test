import './styles.css';

import { createApp } from 'vue';
import App from './app/App.vue';
import OnboardingSdk from './OnboardingSdk.vue';

export const app = createApp(OnboardingSdk);

app.mount('#root');
