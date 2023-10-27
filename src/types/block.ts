import type { Link } from "@/types/link.ts";

interface TextBlock {
  type: "text";
  text: string;
}

interface LinkBlock {
  type: "link";
  link: Link;
}

export type Block = TextBlock | LinkBlock;
