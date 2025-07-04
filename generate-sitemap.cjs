const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://tamiti.com/' });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

[
  '/',
  '/about',
  '/services',
  '/success-stories',
  '/resources',
  '/contact',
  '/careers'
].forEach(path => sitemap.write({ url: path, changefreq: 'monthly', priority: 0.8 }));

sitemap.end();

streamToPromise(sitemap).then(() => console.log('✅ Sitemap generated.'));
