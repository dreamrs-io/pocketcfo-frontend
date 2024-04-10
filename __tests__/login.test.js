const timeout = 200000;

describe(
    '/ (Home Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await globalThis.__BROWSER_GLOBAL__.newPage();
            await page.goto('https://google.com');
        }, timeout);

        it('should load without error', async () => {
            const text = await page.evaluate(() => document.body.textContent);
            expect(text).toContain('google');
        });
    },
    timeout,
);


// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//     executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
//     headless: false
//   });
//   const page = await browser.newPage();

//   it('should login via Google Sign-In', async () => {
//     // Navigate to the login page
//     await page.goto('http://localhost:3000/login'); // Replace with your login page URL

//     // Click on the Google Sign-In button
//     await page.click('.google-signin-button'); // Replace with the actual selector for your Google Sign-In button

//     // Wait for the Google Sign-In popup to appear
//     await page.waitForSelector('#identifierId');

//     // Enter Google account credentials
//     await page.type('#identifierId', 'your-email@gmail.com'); // Replace with your Google account email
//     await page.click('#identifierNext');

//     await page.waitForSelector('input[type="password"]');
//     await page.type('input[type="password"]', 'your-password'); // Replace with your Google account password
//     await page.click('#passwordNext');

//     // Wait for successful sign-in and redirection
//     await page.waitForNavigation();

//     // Verify that the user is redirected to the expected page after sign-in
//     const urlAfterSignIn = page.url();
//     expect(urlAfterSignIn).toEqual('http://localhost:3000/dashboard'); // Replace with the expected redirect URL
//   });


// })();