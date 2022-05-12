export default {
  coverageDirectory: '../../coverage/libs/ethang-db',
  displayName: 'ethang-db',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
};
