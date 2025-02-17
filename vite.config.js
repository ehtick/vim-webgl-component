import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      formats: ['iife', 'es'],
      entry: resolve(__dirname, 'src/component.tsx'),
      name: 'component'
    },
    // Minify set to true will break the IIFE output
    minify: false,
    rollupOptions: {
      external: ['react', 'jsx', 'three']
    }
  }
})
