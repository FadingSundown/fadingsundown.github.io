import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createRouter, createWebHashHistory } from 'vue-router';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
});

import routes from './routes';

const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

myApp.use(router)

myApp.mount('#app');
