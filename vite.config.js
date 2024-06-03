import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Это указывает Vite использовать относительные пути
  plugins: [react()],
})
