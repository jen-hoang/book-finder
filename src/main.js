import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import '@/style/main.css';

const app = createApp(App);

app.use(router);

// only handle error for PROD
if (import.meta.env.PROD) {
  // Global error handler (only for prod)
  app.config.errorHandler = (err, instance, info) => {
    console.warn('Global error', err);
    console.log('Vue instance', instance);
    console.log('Error info', info);
  };
}

app.mount('#app');
