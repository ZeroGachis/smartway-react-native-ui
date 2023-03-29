import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';

import { Body } from '../typography/Body';

interface Props {
    style?: ViewStyle;
    text: string;
    borderColor?: string;
    textColor?: string;
    bgColor?: string;
}

export const Label = ({ text, borderColor, textColor, bgColor, style }: Props) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: theme.sw.spacing.xs,
            paddingVertical: 2,
            backgroundColor: bgColor ? bgColor : theme.sw.colors.neutral[400],
            borderWidth: borderColor ? 1 : 0,
            borderRadius: 6,
            borderColor,
            ...style,
        },
        text: {
            color: textColor ? textColor : theme.sw.colors.neutral[800],
            lineHeight: 20,
            fontWeight: '700',
        },
    });
    return (
        <View style={styles.container}>
            <Body style={styles.text} size="small">
                {text}
            </Body>
        </View>
    );
};
