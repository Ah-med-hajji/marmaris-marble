/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://marmarismarble.com",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: path === "/fr" || path === "/" ? 1.0 : 0.8,
      alternateRefs: [
        {
          href: `${config.siteUrl}/fr`,
          hreflang: "fr",
        },
        {
          href: `${config.siteUrl}/ar`,
          hreflang: "ar",
        },
      ],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/fr"),
    await config.transform(config, "/ar"),
  ],
};
