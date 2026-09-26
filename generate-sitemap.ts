import * as fs from "node:fs/promises";

const canonical = `https://${process.env.VITE_DOMAIN}`;
const robotsTxt = `
User-agent: *
Disallow:

Sitemap: ${canonical}/sitemap.xml
`.trim();
await fs.writeFile("public/robots.txt", robotsTxt);

const sitemapXML = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
  canonical,
  `${canonical}/work`,
  `${canonical}/gallery`,
  `${canonical}/about`,
  ...[
    "ares",
    "skyward",
    "notnexus-portfolio",
    "undercrowned",
    "akridia",
    "spiderverse-in-minecraft",
    "eelios",
    "mcprom",
    "sonar",
    "journey-to-twitchcon",
  ].map((x) => `${canonical}/work/${x}`),
]
  .map((url) =>
    `
<url>
	<loc>${url}</loc>
</url>
`.trim(),
  )
  .join("\n")}
</urlset> 
`.trim();
await fs.writeFile("public/sitemap.xml", sitemapXML);
