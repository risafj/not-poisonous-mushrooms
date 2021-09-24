const SITE_NAME = 'https://notpoisonousmushrooms.com'
module.exports = {
  siteUrl: process.env.SITE_URL || SITE_NAME,
  alternateRefs: [
    {
      href: `${SITE_NAME}/ja`,
      hreflang: 'ja',
    },
    {
      href: `${SITE_NAME}`,
      hreflang: 'en',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  }
}
