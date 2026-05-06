import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ⚠️ importante: precisa bater exatamente com o nome do repo
  base: process.env.NODE_ENV === 'production' ? '/caos-pip/' : '/',

  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})