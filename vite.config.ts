import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true, // or '0.0.0.0'
    hmr: {
      host: 'localhost',      // what the client will connect to
      clientPort: 3000,       // best to match server.port
      protocol: 'ws',         // or 'wss' if using HTTPS
    },
  },
});
