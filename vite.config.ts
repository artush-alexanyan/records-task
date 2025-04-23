import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import type { AliasOptions } from 'vite';
import { fileURLToPath, URL } from 'url'


const alias: AliasOptions = [
  {
    find: '@',
    replacement: fileURLToPath(new URL('./src', import.meta.url)),
  },
]
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server:{
    port: 5000,
    open: true 
  },
  resolve: {
    alias,
  },
})
