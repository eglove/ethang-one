export default {
  coverageDirectory: '../../coverage/libs/react-components',
  displayName: 'react-components',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '..\\..\\jest.preset.ts',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
};
