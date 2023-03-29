import React, { ReactNode } from 'react';
import {
    configureFonts,
    MD3LightTheme,
    Provider as PaperProvider,
    useTheme as usePaperTheme,
} from 'react-native-paper';
import { fontConfig } from './fonts';

const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
    sw: {
        colors: {
            neutral: {
                900: '#1A2026',
                800: '#212B36',
                700: '#2F4158',
                600: '#637381',
                500: '#919EAB',
                400: '#E5EAEE',
                300: '#ECF0F4',
                200: '#F4F6F8',
                100: '#F9FAFB',
                50: '#FFFFFF',
            },
            primary: {
                800: '#225348',
                600: '#017F63',
                400: '#18A586',
                200: '#31E3BC',
                50: '#C5FCF0',
            },
            secondary: {
                800: '#0A2482',
                600: '#1635AE',
                400: '#365CEE',
                200: '#7499FE',
                50: '#C5D0FC',
            },
            information: {
                600: '#006C9C',
                400: '#00C7EB',
                50: '#CAFDF5',
            },
            success: {
                600: '#1B806A',
                400: '#22c55e',
                50: '#D8FBDE',
            },
            warning: {
                600: '#B76E00',
                400: '#f59e0b',
                50: '#fffbeb',
            },
            error: {
                600: '#B71D18',
                400: '#FF5630',
                50: '#FFE9D5',
            },
        },
        spacing: {
            xs: 6,
            s: 12,
            m: 16,
            l: 24,
            xl: 32,
            xxl: 64,
        },
    },
};

export type ThemType = typeof theme;
export const useTheme = () => usePaperTheme<ThemType>();

type Props = {
    children?: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
