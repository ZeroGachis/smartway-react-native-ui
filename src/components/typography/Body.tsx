import React, { ReactNode } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { useTheme } from '../../styles/themes';

interface BodyProps {
    size?: 'default' | 'semi-bold' | 'medium' | 'small';
    children?: ReactNode;
    style?: TextStyle;
}

export const Body = ({ size = 'default', children, style }: BodyProps) => {
    const theme = useTheme();
    let bodyStyle: StyleProp<TextStyle> = {};
    if (size === 'default') {
        bodyStyle = {
            fontSize: 16,
            lineHeight: 19,
        };
    } else if (size == 'semi-bold') {
        bodyStyle = {
            fontSize: 16,
            lineHeight: 19,
            fontWeight: '600',
            fontFamily: 'PublicSans-SemiBold',
        };
    } else if (size === 'medium') {
        bodyStyle = {
            fontSize: 14,
            lineHeight: 16,
        };
    } else if (size === 'small') {
        bodyStyle = {
            fontSize: 12,
            lineHeight: 14,
        };
    }

    bodyStyle = {
        color: theme.sw.colors.neutral[800],
        fontFamily: 'PublicSans-Regular',
        ...bodyStyle,
        ...style,
    };
    return <Text style={bodyStyle}>{children}</Text>;
};
