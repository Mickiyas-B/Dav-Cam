import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Dav-Cam/', // 👈 Add this line
  plugins: [react()],
});


