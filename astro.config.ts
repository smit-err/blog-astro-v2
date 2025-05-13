import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: { shikiConfig: { theme: "houston" } },
  trailingSlash: "always",
  vite: {
    build: {
      assetsInlineLimit: 1024,
    },
  },
  devToolbar: { enabled: false },
});
