const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Load the cookies from a JSON file (manually extracted from the browser)
    const cookies = JSON.parse(fs.readFileSync('linkedin_cookies.json', 'utf8'));

    // Set all cookies on the page
    await page.setCookie(...cookies);

    // Go to LinkedIn's home page directly (as a logged-in user)
    await page.goto('https://www.linkedin.com/mynetwork/network-manager/events/', { waitUntil: 'networkidle2',timeout: 0  });

    // Perform scraping tasks or automation after successful login
    console.log('Logged in with cookies, now performing tasks...');

    // Example task: Scrape some data
    // const content = await page.content();
    // console.log(content);

    //await browser.close();
})();
