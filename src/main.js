import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import Noir from './assets/theme/PrimeVueNoirPreset';
import routes from '@/routes/routes';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';

import './assets/main.css';
import 'primeicons/primeicons.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Noir,
  },
});
app.use(ConfirmationService);
app.use(ToastService);
app.use(routes);

app.mount('#app');
