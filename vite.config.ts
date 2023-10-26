import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { splitVendorChunkPlugin } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
