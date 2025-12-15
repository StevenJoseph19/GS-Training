
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config to run the React app (dev/build/preview)
export default defineConfig({
  plugins: [react()],
});
