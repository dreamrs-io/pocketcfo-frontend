const setupPath = './jest/setup.js';
const teardownPath = './jest/teardown.js';
const puppeteerEnvPath = './jest/puppeteer_enviorment.js';

const config = {
    globalSetup: setupPath,
    globalTeardown: teardownPath,
    testEnvironment: puppeteerEnvPath,
    reporters:
        [
            'default',
            ['jest-html-reporters', {
                publicPath: './reports',
                filename: 'report.html',
                expand: true
            }]
        ]

};

module.exports = config;