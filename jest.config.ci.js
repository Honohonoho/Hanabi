const base = require('./jest.config');

// 添加使用 ci 时才用配置
module.exports = Object.assign({}, base,
    {
        collectCoverage: true,
        collectCoverageFrom: ["{lib,include}/**/*.{ts,tsx}", "!**/node_modules/**"],
        coverageDirectory: 'coverage',
        coverageReporters: ['text', 'lcov'],
        reporters: ["jest-junit"]
    });