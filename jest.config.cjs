module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.js'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': '<rootDir>/src/test/styleMock.js',
    '^/assets/(.*)$': '<rootDir>/public/assets/$1'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: ['<rootDir>/src/**/*.test.(js|jsx)']
}
