import React, { ReactNode } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { useTheme } from '../../styles/themes';

export interface HeadlineProps {
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    children?: ReactNode;
    style?: TextStyle;
    testID?: string;
}

export const Headline = ({ size = 'h1', children, style, testID }: HeadlineProps) => {
    const theme = useTheme();

    let headlineStyle: StyleProp<TextStyle> = {};
    if (size === 'h1') {
        headlineStyle = {
            fontSize: 32,
            fontFamily: 'PublicSans-Bold',
        };
    } else if (size === 'h2') {
        headlineStyle = {
            fontSize: 26,
            fontFamily: 'PublicSans-Bold',
        };
    } else if (size === 'h3') {
        headlineStyle = {
            fontSize: 24,
            fontFamily: 'PublicSans-Bold',
        };
    } else if (size === 'h4') {
        headlineStyle = {
            fontSize: 20,
            fontFamily: 'PublicSans-Bold',
        };
    } else if (size === 'h5') {
        headlineStyle = {
            fontSize: 18,
            fontFamily: 'PublicSans-Medium',
        };
    }

    headlineStyle = {
        ...headlineStyle,
        color: theme.sw.colors.neutral[800],
        ...style,
    };

    return (
        <Text style={headlineStyle} testID={testID}>
            {children}
        </Text>
    );
};
