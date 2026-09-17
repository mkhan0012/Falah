const puppeteer = require('puppeteer');
const fs = require('fs');

const sites = [
  { name: 'velora', url: 'https://velora-alpha-eight.vercel.app/' },
  { name: 'novazen', url: 'https://novazen.vercel.app/' },
  { name: 'bharat', url: 'https://workshop-seven-theta.vercel.app/' }
];

(async () => {
  fs.mkdirSync('public/images/mockups', { recursive: true });
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 });

  for (const site of sites) {
    console.log(`Taking screenshot of ${site.name}...`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.screenshot({ path: `public/images/mockups/${site.name}.jpg`, type: 'jpeg', quality: 90 });
      console.log(`Saved ${site.name}.jpg`);
    } catch (e) {
      console.error(`Failed to screenshot ${site.name}: ${e.message}`);
    }
  }

  await browser.close();
})();
