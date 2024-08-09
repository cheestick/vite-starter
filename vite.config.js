import { defineConfig } from "vite";
import { resolve } from "path";
import { pages } from "./src/vitejs/pages.config";

const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root: "./src/",
  build: {
    target: "es2020",
    outDir,
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        ...pages,
      },
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }

          if (/\.(ttf|otf|fnt|woff|woff2|)$/.test(name ?? "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    // port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },
  plugins: [],
});
