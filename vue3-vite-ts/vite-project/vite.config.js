import {
  defineConfig
} from 'vite'
// 将vue通过插件的形式整合到vite中
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 使用mock数据
import {
  viteMockServe
} from 'vite-plugin-mock';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "comps": path.resolve(__dirname, "src/components"),
      "apis": path.resolve(__dirname, "src/apis"),
      "views": path.resolve(__dirname, "src/views"),
      "utils": path.resolve(__dirname, "src/utils"),
      "routes": path.resolve(__dirname, "src/routes"),
      "styles": path.resolve(__dirname, "src/styles"),
      "plugins": path.resolve(__dirname, "src/plugins"),
    }
  },
  plugins: [vue(), vueJsx(), viteMockServe({
    // default
    // mockPath: 'mock',
    // localEnabled: command === 'serve',
    supportTs: false
  }), ]
})