import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { vitePluginDefine } from './plugins/vite-plugin-define'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const client = mode as 'mobile' | 'laptop'
  let __IS_MOBILE__ = `${client === 'mobile'}`
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        dts: './types/auto-imports.d.ts',
      }),
      vueSetupExtend(),
      vitePluginDefine({
        __IS_MOBILE__
      })
    ]
  } 
})