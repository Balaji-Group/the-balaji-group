
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
  },
  esbuild: {
    // Use esbuild for TypeScript compilation to avoid tsconfig issues
    target: 'es2020',
    logOverride: { 
      'this-is-undefined-in-esm': 'silent'
    }
  },
  // Override TypeScript config path to avoid project reference issues
  define: {
    __DEV__: mode === 'development'
  }
}));
