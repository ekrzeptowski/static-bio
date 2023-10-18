import type { Config } from "../types/config.ts";

export const config: Config = {
  name: "Your Name",
  title: "Your Title",
  description: "Your Description",
  url: "https://example.com",
  lang: "en",
  keywords: ["Your", "Keywords"],
  layout: "default",
  theme: "default",
  googleAnalytics: "UA-XXXXXXXXX-X",
  plausible: {
    domain: "example.com",
    apiHost: "https://plausible.io/api/event",
    scriptHost: "https://plausible.io/js/plausible.js",
  },
};
