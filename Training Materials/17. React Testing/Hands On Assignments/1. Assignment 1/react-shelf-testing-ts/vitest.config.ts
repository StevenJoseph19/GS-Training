import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true, // enable Jest-style globals like expect/describe/it
    css: true,
    coverage: {
      reporter: ["text", "html"],
    },
  },
});
