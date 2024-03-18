import React, { ReactNode } from 'react';
import {
    configureFonts,
    MD3LightTheme,
    Provider as PaperProvider,
    useTheme as usePaperTheme,
} from 'react-native-paper';
import { fontConfig } from './fonts';

export const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...MD3LightTheme.colors,
        onPrimary: '#FFFFFF', // neutral 50
        primary: '#2F4158', // neutral 700

        onSecondaryContainer: '#FFFFFF', // neutral 50
        secondaryContainer: '#18A586', // primary 400

        onSurfaceVariant: '#FFFFFF', // neutral 50
        surfaceVariant: '#2F4158', // neutral 700

        onSurfaceDisabled: '#919EAB', // neutral 500
        surfaceDisabled: '#919EAB' + '3D', // neutral 500

        outline: '#2F4158', // neutral 700
        backdrop: 'rgba(33, 43, 54, 0.6)',
    },
    sw: {
        transparency: {
            80: 'CC',
            48: '7A',
            32: '52',
            24: '3D',
            20: '33',
            16: '29',
            12: '1F',
            8: '14',
        },
        iconbuttonsize: {
            m: 32,
            s: 22,
        },
        buttonsize: {
            m: 26,
            s: 24,
        },
        colors: {
            neutral: {
                900: '#1A2026',
                800: '#212B36',
                700: '#2F4158',
                600: '#637381',
                500: '#919EAB',
                400: '#C4CDD5',
                300: '#DFE3E8',
                200: '#EDEFF2',
                100: '#F4F6F8',
                50: '#FFFFFF',
            },
            primary: {
                900: '#225348',
                700: '#017F63',
                500: '#18A586',
                300: '#31E3BC',
                100: '#DAF1EC',
                /** @deprecated should use `500` instead*/
                main: '#18A586',
                /** @deprecated should use `900` instead*/
                800: '#225348',
                /** @deprecated should use `700` instead*/
                600: '#017F63',
                /** @deprecated should use `300` instead*/
                200: '#31E3BC',
                /** @deprecated should use `100` instead*/
                50: '#C5FCF0',
            },
            secondary: {
                900: '#0A2482',
                700: '#1635AE',
                500: '#365CEE',
                300: '#7499FE',
                100: '#DFE5FC',
                /** @deprecated should use `900` instead*/
                800: '#0A2482',
                /** @deprecated should use `700` instead*/
                600: '#1635AE',
                /** @deprecated should use `500` instead*/
                400: '#365CEE',
                /** @deprecated should use `300` instead*/
                200: '#7499FE',
                /** @deprecated should use `100` instead*/
                50: '#C5D0FC',
            },
            information: {
                900: '#003768',
                700: '#006C9C',
                500: '#00C7EB',
                300: '#61F3F3',
                100: '#D6F6FC',
                /** @deprecated should use `700` instead*/
                600: '#006C9C',
                /** @deprecated should use `500` instead*/
                400: '#00C7EB',
                /** @deprecated should use `100` instead*/
                50: '#CAFDF5',
            },
            success: {
                900: '#0A5554',
                700: '#166655',
                500: '#00CC76',
                300: '#86E8AB',
                100: '#D6F7E9',
                /** @deprecated */
                600: '#1B806A',
                /** @deprecated */
                400: '#22c55e',
                /** @deprecated should use `500` instead*/
                main: '#00CC76',
                /** @deprecated should use `100` instead*/
                50: '#D8FBDE',
            },
            warning: {
                900: '#7A4100',
                700: '#925800',
                500: '#FFAB00',
                300: '#FFD666',
                100: '#FFF2D6',
                /** @deprecated */
                600: '#B76E00',
                /** @deprecated */
                400: '#f59e0b',
                /** @deprecated */
                50: '#fffbeb',
            },
            error: {
                900: '#7A0916',
                700: '#B71D18',
                500: '#FF5630',
                300: '#FFAC82',
                100: '#FFE4DE',
                /** @deprecated should use `700` */
                600: '#B71D18',
                /** @deprecated should use `500` */
                main: '#FF5630',
                /** @deprecated should use `100` */
                50: '#FFE9D5',
            },
        },
        spacing: {
            xxs: 4,
            xs: 8,
            s: 12,
            m: 16,
            l: 24,
            xl: 32,
            xxl: 64,
        },
    },
};

export type Theme = typeof theme;
export const useTheme = () => usePaperTheme<Theme>();

type Props = {
    children?: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
