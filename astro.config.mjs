import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [
    tailwind(),
    icon({
      include: {
        "simple-icons": ["*"],
      },
    }),
  ],
});
