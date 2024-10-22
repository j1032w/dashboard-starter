module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  testMatch: ['**/+(*.)+(spec|test).+(ts)'],  // Ensure the pattern fits your test files
  collectCoverage: true,
  coverageReporters: ['html'],
  setupFiles: ['jest-canvas-mock'],
};
