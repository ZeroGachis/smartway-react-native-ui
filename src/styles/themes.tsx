import React, { ReactNode } from 'react';
import {
    configureFonts,
    MD3LightTheme,
    Provider as PaperProvider,
    useTheme as usePaperTheme,
} from 'react-native-paper';
import { fontConfig } from './fonts';
import tokens from '@zerogachis/smartway-design-token';

export const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...MD3LightTheme.colors,
        onPrimary: '#FFFFFF', // neutral 0
        primary: '#2F4158', // neutral 700

        onSecondaryContainer: '#FFFFFF', // neutral 0
        secondaryContainer: '#18A586', // primary 500

        onSurfaceVariant: '#FFFFFF', // neutral 0
        surfaceVariant: '#2F4158', // neutral 700

        onSurfaceDisabled: '#919EAB', // neutral 500
        surfaceDisabled: '#919EAB' + '3D', // neutral 500

        outline: '#2F4158', // neutral 700
        backdrop: 'rgba(33, 43, 54, 0.6)',
    },
    sw: { ...tokens },
};

export type Theme = typeof theme;
export const useTheme = () => usePaperTheme<Theme>();

type Props = {
    children?: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
