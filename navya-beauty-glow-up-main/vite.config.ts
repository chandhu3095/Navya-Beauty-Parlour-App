import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  server: {
    host: "::",
    port: 8080, // Frontend port (keep this unchanged)
    proxy: {    // ▼ Add this proxy section ▼
      '/api': {
        target: 'http://localhost:5000', // Backend port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: remove /api prefix
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));