import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import type { TextProps } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { tokens } from '@zerogachis/smartway-design-token';
import { getFont } from './utils';

type BodyTypography = keyof typeof tokens.typography.body;

export interface BodyProps extends TextProps<Text> {
    typography?: BodyTypography;
}

export const Body = ({ typography = 'n4', children, style, ...props }: BodyProps) => {
    const theme = useTheme();

    const bodyStyle: StyleProp<TextStyle> = {
        color: theme.sw.color.neutral[800],
        fontSize: tokens.typography.body[typography]?.fontSize,
        fontFamily: getFont(tokens.typography.body[typography]),
    };

    return (
        <Text {...props} style={[bodyStyle, style]}>
            {children}
        </Text>
    );
};
