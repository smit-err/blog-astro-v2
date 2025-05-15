import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: { shikiConfig: { theme: "houston" } },
  prefetch: {
    defaultStrategy: "load",
  },
  devToolbar: { enabled: false },
});
