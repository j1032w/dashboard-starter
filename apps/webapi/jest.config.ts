export default {
  displayName: 'das-webapi',
  preset: '../../jest.preset.js',
  roots: ['./src'],
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/apps/webapi',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.spec.json'}
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],

  testPathIgnorePatterns: ['\\.test\\.ts$'],

};
