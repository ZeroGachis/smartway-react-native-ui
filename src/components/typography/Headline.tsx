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

    let defaultHeadlineStyle: StyleProp<TextStyle> = {};
    if (size === 'h1') {
        defaultHeadlineStyle = {
            fontSize: 32,
            fontFamily: 'PublicSans-Bold',
        };
    } else if (size === 'h2') {
        defaultHeadlineStyle = {
            fontSize: 26,
            fontFamily: 'PublicSans-Bold',
        };
    } else if (size === 'h3') {
        defaultHeadlineStyle = {
            fontSize: 24,
            fontFamily: 'PublicSans-Bold',
        };
    } else if (size === 'h4') {
        defaultHeadlineStyle = {
            fontSize: 20,
            fontFamily: 'PublicSans-Bold',
        };
    } else if (size === 'h5') {
        defaultHeadlineStyle = {
            fontSize: 18,
            fontFamily: 'PublicSans-Medium',
        };
    }

    defaultHeadlineStyle = {
        ...defaultHeadlineStyle,
        color: theme.sw.colors.neutral[800],
        ...style,
    };

    return (
        <Text style={defaultHeadlineStyle} testID={testID}>
            {children}
        </Text>
    );
};
