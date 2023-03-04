import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    // host: '127.0.0.1',
    // public: 'localhost:8080',
    origin: 'http://localhost:3000',
    strictPort: true,
    port: 8080,
    hmr: {
      host: 'localhost'
    }
  }
})
