import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { fileURLToPath } from "url";
import { createStyledComponentsPlugin } from 'vite-plugin-styled-components'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createStyledComponentsPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' points to the 'src' directory
    },
  },
})
