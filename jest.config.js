export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js'],
    collectCoverage: true,
    collectCoverageFrom: ['src/utils/**/*.js'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html'],
    reporters: [
      'default',
      ['jest-html-reporter', {
        pageTitle: 'Test Report',
        outputPath: 'test-report.html',
      }],
    ],
  };
  