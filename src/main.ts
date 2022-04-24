import { createApp } from 'vue'
import App from './App.vue'
import '../types/env'

createApp(App)

declare global {
    const __IS_MOBILE__: boolean
  }
  
declare module "@vue/runtime-core" { 
    interface ComponentCustomProperties {
        __IS_MOBILE__: boolean;
    }
}