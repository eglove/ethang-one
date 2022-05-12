export default {
  coverageDirectory: '../../coverage/libs/apollo',
  displayName: 'apollo',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '..\\..\\jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
};
