// vite.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    css: true,
    globals: true,
    coverage: {
      provider: "v8", // Vite 5 + Vitest >= 1.x/2.x
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "./coverage",
    },
  },
});
