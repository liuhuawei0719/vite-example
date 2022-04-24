/**
 * @description 该插件用于全局静态替换，类似 webpack 的 DefinePlugin
 */
import { Plugin } from 'vite'

type DefineData = Record<string, string | ((match: string, code: string, id: string) => string)>

declare module "@vue/runtime-core" { 
  interface ComponentCustomProperties {
    __IS_MOBILE__: boolean;
  }
}

export function vitePluginDefine(defineData: DefineData): Plugin {
  return {
    name: 'vite-define',
    transform(code, id) {
      let result: string = code

      Object.entries(defineData).forEach(([key, value]) => {
        const replaceValue: any =
          typeof value === 'function'
            ? (match: string) => {
                return value.call(null, match, result, id)
              }
            : value

        // 针对vue文件，修复template中替换失败问题
        if (/.vue$/.test(id)) {
          result = result.replace(new RegExp(`_ctx.${key}`, 'g'), replaceValue)
        }
        result = result.replace(new RegExp(key, 'g'), replaceValue)
      })

      return result
    },
  }
}
