const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}