import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true, 
  },
	resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
