const sm = require('sitemap');
const fs = require('fs');

const urls = [
  '/dash/login',
  '/dash/sign-up',
].map(it => ({
  url: it,
  changefreq: 'weekly',
  priority: 0.5,
}));

const it = sm.createSitemap({
  hostname: 'https://blockeden.xyz',
  urls,
});

fs.writeFileSync(`${__dirname}/sitemap.xml`, it.toString());
