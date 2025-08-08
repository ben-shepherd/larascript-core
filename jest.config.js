module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  collectCoverageFrom: [
    "src/**/*.{ts,js}",
    "!src/**/*.test.{ts,js}",
    "!src/**/*.d.ts",
    "!src/tests/**", // Exclude test utilities
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
