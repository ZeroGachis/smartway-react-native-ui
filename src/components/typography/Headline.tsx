import React, { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useTheme } from "smartway-react-native-ui";

interface HeadlineProps {
    size?: 'h1' | 'h2' | 'h3' | 'h4';
    children?: ReactNode;
    style?: TextStyle;
};


export const Headline = ({size = 'h1', children, style}: HeadlineProps) => {
    const theme = useTheme();

    let headlineStyle: StyleProp<TextStyle> = {};
    if (size === 'h1') {
        headlineStyle = {
            fontSize: 28,
            lineHeight: 33,
        }
    }
    else if (size === 'h2') {
        headlineStyle = {
            fontSize: 24,
            lineHeight: 28,
        }
    }
    else if (size === 'h3') {
        headlineStyle = {
            fontSize: 20,
            lineHeight: 24,
        }
    } else if (size === 'h4') {
        headlineStyle = {
            fontSize: 18,
            lineHeight: 21,
            letterSpacing: 1,
            textTransform: 'uppercase'
        }
    }

    headlineStyle = {
        ...headlineStyle,
        color: theme.sw.colors.neutral[800],
        ...style
    };

    return <Text style={headlineStyle}>{children}</Text>;
};


