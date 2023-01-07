const sm = require('sitemap');
var XmlSitemap = require('xml-sitemap');
var xmlString = require('fs').readFileSync(`${__dirname}/../../build/sitemap.xml`);
var oldSitemap = new XmlSitemap(xmlString);

[
  // external
  ...[
    'https://blockeden.xyz/analytics/public/dashboard/8aebd278-8f33-43ea-95f3-8baf3ecab5cf/',
    'https://blockeden.xyz/sui-health-checker/',
  ].map(it => ({
    url: it,
    changefreq: 'weekly',
    priority: 0.5,
  })),

  // high priority
  ...[
    'https://blockeden.xyz/about-us/',
    'https://blockeden.xyz/dash/login/',
    'https://blockeden.xyz/dash/sign-up/',
    'https://blockeden.xyz/pricing/',
    'https://blockeden.xyz/docs/intro/',
    'https://blockeden.xyz/'
  ].map(it => ({
    url: it,
    changefreq: 'weekly',
    priority: 1.0,
  })),
].forEach(it => {
  if (oldSitemap.hasUrl(it.url)) {
    const {url, ...opts} = it;
    oldSitemap.setOptionValues(it.url, opts);
  } else {
    oldSitemap.add(it)
  }
});

oldSitemap.removeOption('lastmod');

require('fs').writeFileSync(`${__dirname}/../../build/sitemap-manual.xml`, oldSitemap.xml)
require('fs').writeFileSync(`${__dirname}/../../build/sitemap.xml`, oldSitemap.xml)
