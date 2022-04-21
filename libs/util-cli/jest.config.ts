export default {
  coverageDirectory: '../../coverage/libs/util-cli',
  globals: {
    displayName: 'util-cli',
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '..\\..\\jest.preset.ts',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
};
