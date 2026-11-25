import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Zet hier de NAAM van jouw GitHub repository!
const basePath = '/portfolio/';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: notsyfex.github.io,
});