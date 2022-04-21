export default {
  coverageDirectory: '../../coverage/apps/computer-cli',
  displayName: 'computer-cli',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  preset: '..\\..\\jest.preset.ts',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
};
