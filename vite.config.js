import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  base: "/my-website/",
  plugins: [react(), eslint()],
  server: {
    hmr: {
      overlay: true, // Shows error overlay in the browser
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
