import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: { shikiConfig: { theme: "houston" } },
  build: {
    inlineStylesheets: "never",
  },
  devToolbar: { enabled: false },
});
