import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const env = loadEnv( process.cwd(), '')

const staticServerUri = env.VITE_A || "";    


// https://vitejs.dev/config/
export default defineConfig({
  base: `/${staticServerUri}/`,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
