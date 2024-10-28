import './assets/css/main.css'

import { createApp } from 'vue'
import "./assets/css/main.css";
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
app.use(router)

createApp(App).use(router).use(pinia).mount('#app')
