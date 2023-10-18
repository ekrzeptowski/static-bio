export interface Config {
  name: string;
  title: string;
  description: string;
  url: string;
  lang: string;
  keywords: string[];
  layout: string;
  theme: string;
  googleAnalytics?: string;
  plausible?: { domain: string; apiHost: string; scriptHost: string };
}
