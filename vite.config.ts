import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import dotenv from 'dotenv'

dotenv.config(); // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],

})

