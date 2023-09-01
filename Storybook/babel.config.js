const path = require('path');
const pack = require('../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          ['smartway-react-native-ui']: path.join(__dirname, '..', pack.source),
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
