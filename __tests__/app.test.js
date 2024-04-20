const timeout = 200000;
const baseUrl = 'http://localhost:3000'
const email = 'testaccount@gmail.com';
const password = 'testpassword';
const username = 'Mohid Meer'

describe('Login', () => {
    let page;
    let newPage;
    let newTarget;
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
    // it.skip('should login the user via Google' ,async ()=>{
    //     await page.waitForSelector('input[type="email"]'); // Wait for the email input field to be available
    //     await page.waitForSelector('input[type="email"]'); // Wait for the password input field to be available
    //     await page.locator('input[type="email"]').fill(email);
    //     await page.click('xpath=//span[text()="Next"]');
    //     const text = await page.evaluate(() => document.body.textContent)
    //     console.log(text);
    //     await new Promise(resolve => setTimeout(resolve, 5000))
    // },timeout)

    it('should redirect to demo software instance', async () => {
        await page.goto(baseUrl)
        await page.waitForSelector('#demo');
        page.click('#demo');
        newTarget = await globalThis.__BROWSER_GLOBAL__.waitForTarget(target => target.opener() === page.target())
        newPage = await newTarget.page();
        expect(await newPage.title()).toContain('Dashboard - Demo');
        await newPage.close();

    }, timeout)


    it('should allow user to register via email and password', async () => {
        await page.goto(baseUrl + '/register');
        await page.waitForSelector('input[id="username"]'); 
        await page.waitForSelector('input[id="email"]'); 
        await page.waitForSelector('input[id="password"]');
        await page.waitForSelector('input[id="password_confirmation"]');
        await page.locator('input[id="username"]').fill(username); 
        await page.locator('input[id="email"]').fill(email); 
        await page.locator('input[id="password"]').fill(password);
        await page.locator('input[id="password_confirmation"]').fill(password);
        await page.waitForSelector('button[type="submit"]');
        await page.click('button[type="submit"]');
        const response = await page.waitForResponse(response => response.url().includes('/register'));
        const responseBody = await response.json();
        const status = await response.status();
        console.log(responseBody.status);
        if (status!=201){
            throw new Error('Test failed:'+ responseBody.message)
        }
        expect(status).toBe(201);


    }, timeout)
    it('should allow user to login via email and password', async () => {
        await page.goto(baseUrl + '/login');
        await page.waitForSelector('input[id="email"]'); 
        await page.waitForSelector('input[id="password"]');
        await page.locator('input[id="email"]').fill(email); 
        await page.locator('input[id="password"]').fill(password);
        await page.waitForSelector('button[type="submit"]');
        await page.click('button[type="submit"]');
        const response = await page.waitForResponse(response => response.url().includes('/credentials'));
        const status = await response.status();
        expect(status).toBe(200);
    }, timeout)
    


},



timeout);