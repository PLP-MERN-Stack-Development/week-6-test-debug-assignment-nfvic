module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/matchers'],
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/tests/unit/**/*.test.jsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
}; 