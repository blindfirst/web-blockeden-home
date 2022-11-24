const sm = require('sitemap');
const fs = require('fs');

const urls = [
  '/dash/login',
  '/dash/sign-up',
  '/analytics/public/dashboard/8aebd278-8f33-43ea-95f3-8baf3ecab5cf'
].map(it => ({
  url: it,
  changefreq: 'daily',
  priority: 0.5,
}));

const it = sm.createSitemap({
  hostname: 'https://blockeden.xyz',
  urls,
});

fs.writeFileSync(`${__dirname}/sitemap.xml`, it.toString());
