import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: 'tailwind.config.js',
  },
  test:{
    globals :true,
    environment:'jsdom',
    setupFiles : './src/setupTest.ts'
  }
});