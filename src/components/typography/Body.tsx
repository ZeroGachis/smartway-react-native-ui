import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import type { TextProps } from 'react-native-paper';

export const toCamelCase = (str: string): string =>
    str
        .split('-')
        .map(([first, ...rest]) => {
            if (first === undefined) return '';
            return first.toUpperCase() + rest.join('').toLowerCase();
        })
        .join('');

interface BodyProps extends TextProps<Text> {
    size?: 'B1' | 'B2' | 'B3';
    weight?: 'regular' | 'semi-bold' | 'bold';
}

export const Body = (props: BodyProps) => {
    const { size, weight, children, style } = props;
    const weightSuffix = toCamelCase(weight === undefined ? 'regular' : weight);

    let bodyStyle: StyleProp<TextStyle> = style;
    switch (size) {
        case 'B1':
            bodyStyle = {
                fontSize: 16,
            };
            break;
        case 'B2':
            bodyStyle = {
                fontSize: 14,
            };
            break;
        case 'B3':
            bodyStyle = {
                fontSize: 12,
            };
            break;
        default:
            bodyStyle = {
                fontSize: 14,
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
        ...bodyStyle,
        fontFamily: 'PublicSans-' + weightSuffix,
    };

    return (
        <Text {...props} style={[style, bodyStyle]}>
            {children}
        </Text>
    );
};
