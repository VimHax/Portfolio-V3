import { nonNull } from "./util";

export default function generateMetadata({
  route,
  title,
  description,
  color,
  embed,
  keywords,
}: {
  route: string;
  title: string;
  description: string;
  color: string;
  embed: string;
  keywords: string[];
}) {
  const siteName = "VimHax";
  const domain = nonNull(import.meta.env.VITE_DOMAIN);
  const baseURL = `https://${domain}`;
  const twitterTag = `@VimHax`;
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    { name: "theme-color", content: color },
    { tagName: "link", rel: "canonical", href: baseURL + route },
    {
      name: "keywords",
      content: [
        ...keywords,
        "VimHax",
        "Vimukthi",
        "Weerabahu",
        "Full-stack",
        "Developer",
        "Sri Lanka",
      ].join(", "),
    },

    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:url", content: baseURL + route },
    { name: "og:image", content: baseURL + embed },
    { name: "og:site_name", content: siteName },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:site", content: twitterTag },
    { name: "twitter:creator", content: twitterTag },
    { name: "twitter:image", content: baseURL + embed },
  ];
}
