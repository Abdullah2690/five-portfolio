// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Global Vue error:', err)
  // You could add error tracking here (like Sentry)
}

app.use(router)
app.mount('#app')