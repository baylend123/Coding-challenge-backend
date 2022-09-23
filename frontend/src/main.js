import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
const pinia = createPinia()
const app = createApp(App)
app.use(createPinia())
app.use( plugin, defaultConfig)
app.use(router, pinia)
app.mount('#app')

