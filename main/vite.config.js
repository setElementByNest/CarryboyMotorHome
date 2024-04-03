import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: '/index.html', 
        main_th: '/main-th.html', 
      }
    }
  }
});
