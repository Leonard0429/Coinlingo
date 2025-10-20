import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Coinlingo/',   // MUST exactly match my GitHub repository name
})
