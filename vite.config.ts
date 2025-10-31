import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
    react(),
  ],

  server: {
    open: true,
    host: 'localhost',
    port: 3099,
    strictPort: true,
  },

  preview: {
    port: 3098,
    strictPort: true,
  },

  build: {
    outDir: 'server/build',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
