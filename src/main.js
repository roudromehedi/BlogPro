import '../public/assets/main.css'
import '@fontsource/hind-siliguri'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
