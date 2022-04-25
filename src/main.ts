import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)

app.mount('#app')
declare global {
    const __IS_MOBILE__: boolean
  }
  
declare module "@vue/runtime-core" { 
    interface ComponentCustomProperties {
        __IS_MOBILE__: boolean;
    }
}