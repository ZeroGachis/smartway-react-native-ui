import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import type { TextProps } from 'react-native-paper';
import { tokens } from '@zerogachis/smartway-design-token';
import { getFont } from './utils';

type HeadlineTypography = keyof typeof tokens.typography.headline;

export interface HeadlineProps extends TextProps<Text> {
    typography: HeadlineTypography;
}

export const Headline = ({ typography = 'n5', children, style, ...props }: HeadlineProps) => {
    const theme = useTheme();

    const defaultHeadlineStyle: StyleProp<TextStyle> = {
        color: theme.sw.color.neutral[800],
        fontSize: tokens.typography.headline[typography]?.fontSize,
        fontFamily: getFont(tokens.typography.headline[typography]),
    };
    return (
        <Text style={[defaultHeadlineStyle, style]} {...props}>
            {children}
        </Text>
    );
};
