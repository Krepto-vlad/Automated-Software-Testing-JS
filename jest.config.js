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
      ["jest-junit", {
        outputDirectory: "./test-results", 
        outputName: "test-report.xml", 
      }]
    ],
  };
  