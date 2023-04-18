const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  // PieChart - The 'Cannot read property 'indexOf' of null'
  // PieChart uses  HTMLCanvasElement.prototype.toDataURL, but it is not implemented in Jest environment.
  // https://supportcenter.devexpress.com/ticket/details/t942670/piechart-the-cannot-read-property-indexof-of-null-error-appears-when-a-test-is-run-in
  // When jest.config.js is existing, package.json jest config is not allowed.
  preset: 'jest-preset-angular',

  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  setupFiles: ['jest-canvas-mock'],
};
