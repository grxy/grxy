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
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
    },
    resetModules: true,
    setupFilesAfterEnv: [
        '<rootDir>/scripts/jest/setupTestFrameworkScriptFile.js',
    ],
    snapshotSerializers: ['jest-emotion'],
    testPathIgnorePatterns: ['/dist/', '/node_modules/'],
    testRegex: '\\.test\\.js$',
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!@grxy)'],
}
