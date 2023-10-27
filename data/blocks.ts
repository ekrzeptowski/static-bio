import type { Block } from "@/types/block.ts";

export const blocks: Block[] = [
  {
    type: "link",
    link: {
      id: 1,
      title: "My Blog",
      description: "My personal blog",
      href: "https://blog.example.com",
      icon: "simple-icons:blogger",
    },
  },
  {
    type: "text",
    text: "Text block",
  },
  {
    type: "link",
    link: {
      id: 2,
      title: "Awesome Discord community",
      description: "A community of awesome people",
      href: "https://discord.gg/",
      icon: "simple-icons:discord",
    },
  },
  {
    type: "link",
    link: {
      id: 3,
      title: "StaticBio repository",
      href: "https://github.com/ekrzeptowski/static-bio",
    },
  },
];
