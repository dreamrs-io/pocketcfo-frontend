const setupPath = './jest/setup.js';
const teardownPath = './jest/teardown.js';
const puppeteerEnvPath = './jest/puppeteer_enviorment.js';

const config = {
    globalSetup: setupPath,
    globalTeardown: teardownPath,
    testEnvironment: puppeteerEnvPath,
};

module.exports = config;