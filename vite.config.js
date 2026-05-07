import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 部署到 GitHub Pages 的關鍵設定
  // 這裡的名稱必須與你的 GitHub Repository 名稱完全一致
  base: '/anonymous-chat-frontend/', 
})