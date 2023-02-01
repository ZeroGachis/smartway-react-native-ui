import { configureFonts, MD3LightTheme } from 'react-native-paper';
import { fontConfig } from './fonts';


export const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({config: fontConfig}),
};