import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: { shikiConfig: { theme: "houston" } },
  trailingSlash: "always",
  build: {
    inlineStylesheets: "never",
  },
  devToolbar: { enabled: false },
});
