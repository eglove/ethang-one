export default {
  coverageDirectory: '../../coverage/apps/personal-dashboard',
  displayName: 'personal-dashboard',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '..\\..\\jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/specs/setupTests.js'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
};
