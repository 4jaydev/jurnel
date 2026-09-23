import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: process.cwd(),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
