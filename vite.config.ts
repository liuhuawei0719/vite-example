import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginDefine } from './plugins/vite-plugin-define'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const client = mode as 'mobile' | 'laptop'
  let __IS_MOBILE__ = `${client === 'mobile'}`
  return {
    plugins: [
      vue(),
      vitePluginDefine({
        __IS_MOBILE__
      })
    ]
  } 
})