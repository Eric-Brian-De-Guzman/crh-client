import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:1337/api'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

