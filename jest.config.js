export default {
    setupFilesAfterEnv: ["./src/setupTests.js"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["<rootDir>/tests/setup.js"],
    verbose: true,
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    }
};