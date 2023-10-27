import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal-profile',
  define: {
    'import.meta.env.BASE_URL': '"/personal-profile"'
  }
})
