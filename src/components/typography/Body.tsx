import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import type { TextProps } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { tokens } from '@zerogachis/smartway-design-token';
import { LineHeight } from '@zerogachis/smartway-design-token/dist/cjs/src/Tokens/TokensType';
import { getFont, getLineHeight } from './utils';

type BodyTypography = keyof typeof tokens.typography.body;

export interface BodyProps extends TextProps<Text> {
    typography?: BodyTypography;
    lineHeight?: keyof LineHeight;
}

export const Body = ({
    typography = 'n4',
    lineHeight = 'normal',
    children,
    style,
    ...props
}: BodyProps) => {
    const theme = useTheme();

    const bodyStyle: StyleProp<TextStyle> = {
        color: theme.sw.color.neutral[800],
        fontSize: tokens.typography.body[typography]?.fontSize,
        fontFamily: getFont(tokens.typography.body[typography]),
        lineHeight: getLineHeight(
            tokens.lineHeight[lineHeight],
            tokens.typography.headline[typography]?.fontSize,
        ),
    };

    return (
        <Text {...props} style={[bodyStyle, style]}>
            {children}
        </Text>
    );
};
