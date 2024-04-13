const timeout = 200000;
const baseUrl = 'http://localhost:3000'
// const baseUrl = 'https://bot.sannysoft.com/'
const email = 'testaccount@gmail.com';
const password = 'testpassword';

describe('Login', () => {
    let page;
    beforeAll(async () => {
        page = await globalThis.__BROWSER_GLOBAL__.newPage();
        await page.goto(baseUrl);
    }, timeout);


    it('should load page without any error', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('Upload Docs, File Business');
    });

    it('should navigate to login page', async () => {
        await page.goto(baseUrl + '/login')
        const text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('Login');
    }, timeout)

    it('should redirect to Google login page', async () => {
        await page.goto(baseUrl + '/login')
        await page.waitForSelector('#google'),
        await page.click('#google'),
        await page.waitForNavigation()
        expect(page.url()).toContain('https://accounts.google.com');
    } ,timeout)

    // google dosent allows puppeteer for login so skiiping that 
    // it ('should login the user via Google' ,async ()=>{
    //     await page.waitForSelector('input[type="email"]'); // Wait for the email input field to be available
    //     await page.waitForSelector('input[type="email"]'); // Wait for the password input field to be available
    //     await page.locator('input[type="email"]').fill(email);
    //     await page.click('xpath=//span[text()="Next"]');
    //     // await page.locator('input[type="password"]').fill(password);
    //     const text = await page.evaluate(() => document.body.textContent)
    //     console.log(text);
    //     await new Promise(resolve => setTimeout(resolve, 5000))
    //     // expect(text).toContain('This browser or app may not be secure');
    // },timeout)


},



timeout);