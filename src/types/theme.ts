import type { Social } from "./social.ts";
import type { Config } from "./config.ts";
import type { Block } from "./block.ts";

export interface ThemeProps {
  config: Config;
  blocks: Block[];
  social: Social[];
}
