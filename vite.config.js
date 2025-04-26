import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueDevTools(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    cors: true,
    allowedHosts: [
      'a8fc-187-99-117-69.ngrok-free.app' // ou qualquer subdomínio do ngrok que estiver usando
    ]
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
