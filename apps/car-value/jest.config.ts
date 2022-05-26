export default {
  coverageDirectory: '../../coverage/apps/car-value',
  displayName: 'car-value',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
};
