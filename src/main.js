import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './_reset.css'

createApp(App).use(createPinia()).mount('#app')
