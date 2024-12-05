import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.svg'], // 确保 SVG 被正确处理
  plugins: [react()],
})
