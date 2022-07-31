export default {
  coverageDirectory: '../../coverage/libs/trussworks-components',
  displayName: 'trussworks-components',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
};
