export default {
  coverageDirectory: '../../coverage/libs/algorithms',
  displayName: 'algorithms',
  globals: {
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
