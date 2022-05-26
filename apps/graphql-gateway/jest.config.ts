export default {
  coverageDirectory: '../../coverage/apps/graphql-gateway',
  displayName: 'graphql-gateway',
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
