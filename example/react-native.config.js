const path = require('path');
const pak = require('../package.json');

module.exports = {
    dependencies: {
        ['smartway-react-native-ui']: {
            root: path.join(__dirname, '..'),
        },
    },
    assets: ['../src/assets/fonts/'],
};
