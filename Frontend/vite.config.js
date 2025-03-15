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
  base: '/Jobify/', // Correct base path for Render deployment
  build: {
    outDir: 'dist',  // Ensure the build output goes to the correct folder
    assetsDir: 'assets',  // Ensures assets like CSS and JS are correctly placed
  },
})

