const esModules = ['lodash-es'].join('|');
export default {
  displayName: 'das-ui',
  preset: '',
  roots: ['./src'],
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/apps/ui',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  // testEnvironment: '@happy-dom/jest-environment',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`node_modules/(?!.*\\.mjs$|${esModules})`],
  moduleNameMapper: {
    '.*\\.txt': 'jest-raw-loader',
    '^lodash-es$': 'lodash',
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],

};
