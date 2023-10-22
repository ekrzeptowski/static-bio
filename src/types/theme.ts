import type { Link } from "./link.ts";
import type { Social } from "./social.ts";
import type { Config } from "./config.ts";

export interface ThemeProps {
  config: Config;
  links: Link[];
  social: Social[];
}
