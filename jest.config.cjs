module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
};
