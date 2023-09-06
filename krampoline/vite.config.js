import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const staticServerUri = process.env.REACT_APP_PATH || "";

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: `/${staticServerUri}/`,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
