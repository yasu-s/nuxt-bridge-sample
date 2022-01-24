module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue', '<rootDir>/layouts/**/*.vue'],
  testMatch: ['<rootDir>/test/**/*.(spec|test).(js|ts|vue)'],
  testEnvironment: 'jsdom',
  resetMocks: true,
  testTimeout: 100,
  setupFilesAfterEnv: ['./test/jest-setup.ts'],
}
