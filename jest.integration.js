require('dotenv').config();

// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: '<rootDir>/coverage/integration',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tools/',
    '/test/',
    '/src/models',
    '/src/.*\\.(spec.ts|model.ts)$'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: [
    '<rootDir>/test/**/*.ispec.ts'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
