// jest.config.js

module.exports = {
  "preset": 'ts-jest',
  "testEnvironment": 'node',
  "roots": ['<rootDir>/tests'],
  "transform": {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ],
  "testResultsProcessor":  "jest-sonar-reporter",
  "testRegex": '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  "moduleFileExtensions": ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
