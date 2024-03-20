import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import type { TextProps } from 'react-native-paper';
import { useTheme } from '../../styles/themes';

export const toCamelCase = (str: string): string =>
    str
        .split('-')
        .map(([first, ...rest]) => {
            if (first === undefined) return '';
            return first.toUpperCase() + rest.join('').toLowerCase();
        })
        .join('');

export interface BodyProps extends TextProps<Text> {
    size?: 'B1' | 'B2' | 'B3';
    weight?: 'regular' | 'semi-bold' | 'bold';
}

export const Body = (props: BodyProps) => {
    const { size, weight, children, style } = props;
    const weightSuffix = toCamelCase(weight === undefined ? 'regular' : weight);
    const theme = useTheme();

    let bodyStyle: StyleProp<TextStyle> = style;
    switch (size) {
        case 'B1':
            bodyStyle = {
                fontSize: theme.sw.fontSize.s,
            };
            break;
        case 'B2':
            bodyStyle = {
                fontSize: theme.sw.fontSize.xs,
            };
            break;
        case 'B3':
            bodyStyle = {
                fontSize: theme.sw.fontSize.xxs,
            };
            break;
        default:
            bodyStyle = {
                fontSize: theme.sw.fontSize.xs,
            };
            break;
    }

    if (weight === 'bold') {
        bodyStyle = {
            ...bodyStyle,
            lineHeight: 20,
        };
    }

    bodyStyle = {
        color: theme.sw.color.neutral[800],
        ...bodyStyle,
        fontFamily: 'PublicSans-' + weightSuffix,
    };

    return (
        <Text {...props} style={[bodyStyle, style]}>
            {children}
        </Text>
    );
};
