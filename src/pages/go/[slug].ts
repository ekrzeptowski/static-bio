export const prerender = false;
import type { APIRoute } from "astro";
import { social } from "@data/social";
import { links } from "@data/links";

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
  links.forEach(
    (site) =>
      site.slug &&
      redirects.push({
        params: { slug: site.slug },
        props: {
          href: site.href,
        },
      })
  );

  return redirects;
}
