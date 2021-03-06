export default {
  coverageDirectory: '../../coverage/libs/react-hooks',
  displayName: 'react-hooks',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '..\\..\\jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
};
