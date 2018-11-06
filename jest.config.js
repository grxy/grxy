module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text-summary'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    resetModules: true,
    testPathIgnorePatterns: ['/dist/', '/node_modules/'],
    transformIgnorePatterns: [`<rootDir>/node_modules/(?!@grxy)`],
}
