import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [react()],
  base: '/', // Ensures proper routing
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    historyApiFallback: true, // 🔥 Fixes route issues on Render
  },
  preview: {
    historyApiFallback: true, // Ensures preview mode also works
  }
})

