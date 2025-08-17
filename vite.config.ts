
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./",
  server: {
    host: "::",
    port: 8080,
    open: true,
  },
  plugins: [
    react({
      tsDecorators: true,
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      onwarn(warning, warn) {
        // Skip all TypeScript warnings during build
        if (warning.code === 'PLUGIN_WARNING' || warning.message?.includes('TypeScript')) {
          return;
        }
        warn(warning);
      }
    }
  },
  esbuild: {
    logOverride: { 
      'this-is-undefined-in-esm': 'silent',
      'direct-eval': 'silent'
    },
    // Use esbuild for TypeScript instead of tsc
    target: 'es2020'
  },
  // Disable TypeScript checking in Vite
  define: {
    __DEV__: mode === 'development'
  }
}));
