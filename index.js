const puppeteer = require('puppeteer-core');
const chromium = require('chrome-aws-lambda');

(async () => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto('https://www.fiverr.com');
  console.log("Fiverr opened!");

  await browser.close();
})();
