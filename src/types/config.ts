export interface Config {
  name: string;
  seo: {
    title: string;
    description: string;
    url: string;
    lang: string;
    keywords: string[];
    twitter_creator?: string;
    twitter_site?: string;
  };
  googleAnalytics?: string;
  plausible?: { domain: string; apiHost: string; scriptHost: string };
}
