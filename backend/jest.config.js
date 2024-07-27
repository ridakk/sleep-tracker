module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!**/*.test.{js,ts}',
    '!**/*.test.*.{js,ts}',
    '!jest.*.js',
    '!server.{js,ts}',
    '!.sequelize.cli.config.{js,ts}',
    '!<rootDir>/coverage/**/*.{js,ts}',
    '!<rootDir>/utils/logger/serializers/*.{js,ts}',
  ],
  projects: [
    {
      displayName: 'api tests',
      testMatch: ['**/*.test.{js,ts}'],
      setupFilesAfterEnv: ['./jest.setup.js'],
      modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
      testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
      transform: {
        '^.+\\.(t|j)s?$': ['@swc/jest'],
      },
    },
  ],
};
