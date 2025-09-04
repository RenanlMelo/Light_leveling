import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { resolve } from "path";
import { copyFileSync, mkdirSync, existsSync } from "fs";

// Função para copiar arquivos após o build
function copyPhpEmail() {
  return {
    name: "copy-php-email",
    closeBundle: () => {
      const srcPath = resolve(__dirname, "email/send-email.php");
      const destDir = resolve(__dirname, "dist/email");

      if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });

      if (existsSync(srcPath)) {
        copyFileSync(srcPath, `${destDir}/send-email.php`);
      } else {
        console.warn("Arquivo send-email.php não encontrado em public/email");
      }
    },
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 0,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 0,
    }),
    copyPhpEmail(), // Copia a pasta /email com o PHP após o build
  ],
  base: "./",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          about: ["src/pages/light/about/page.tsx"],
          services: ["src/pages/light/services/page.tsx"],
        },
      },
    },
  },
  server: {
    proxy: {
      "/email": {
        target: "https://levelingcorp.com.br/",
        // target: "http://localhost:5173/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/email/, "/email"),
      },
    },
  },
});
