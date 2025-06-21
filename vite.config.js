import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prefetch from 'vite-plugin-prefetch/dist'
// import { visualizer } from 'vite-plugin-bundle-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    prefetch(),
    // visualizer()
  ],
})
