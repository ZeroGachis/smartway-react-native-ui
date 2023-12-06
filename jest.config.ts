import { defaults as tsjPreset } from 'ts-jest/presets';
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    ...tsjPreset,
    preset: 'react-native',
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.spec.json',
            },
        ],
    },
    testMatch: ['**/?(*.)test.(ts|tsx)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        'node_modules/(?!(@react-native|react-native|react-native-drop-shadow|@gorhom/bottom-sheet|react-native-reanimated)/)',
    ],
    moduleDirectories: ['node_modules', 'src'],
    setupFiles: [
        './jest.setup.js',
        './node_modules/react-native-gesture-handler/jestSetup.js',
        './node_modules/react-native/jest/setup.js',
    ],
};

export default jestConfig;
