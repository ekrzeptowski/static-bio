export const prerender = false;
import type { APIRoute } from "astro";
import { social } from "@data/social";
import { blocks } from "@data/blocks.ts";

export const GET: APIRoute = ({ props, redirect }) => {
  const href = props.href;
  return redirect(href, 302);
};

export function getStaticPaths() {
  let redirects: { params: { slug: string }; props: { href: string } }[] = [];

  social.forEach(
    (site) =>
      site.slug &&
      redirects.push({
        params: { slug: site.slug },
        props: {
          href: site.href,
        },
      })
  );
  blocks.forEach(
    (site) =>
      site.type === "link" &&
      site.link.slug &&
      redirects.push({
        params: { slug: site.link.slug },
        props: {
          href: site.link.href,
        },
      })
  );

  return redirects;
}
