import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 5173,        // You can adjust the port if needed
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
