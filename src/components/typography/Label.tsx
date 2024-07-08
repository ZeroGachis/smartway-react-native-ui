import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import type { TextProps } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { tokens } from '@zerogachis/smartway-design-token';
import { getFont } from './utils';

type LabelTypography = keyof typeof tokens.typography.label;

export interface LabelProps extends TextProps<Text> {
    typography?: LabelTypography;
}

export const Label = ({ typography = 'n1', children, style, ...props }: LabelProps) => {
    const theme = useTheme();

    const bodyStyle: StyleProp<TextStyle> = {
        color: theme.sw.color.neutral[800],
        fontSize: tokens.typography.label[typography]?.fontSize,
        fontFamily: getFont(tokens.typography.label[typography]),
    };

    return (
        <Text {...props} style={[bodyStyle, style]}>
            {children}
        </Text>
    );
};
