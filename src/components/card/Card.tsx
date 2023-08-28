import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { useTheme } from '../../styles/themes';

interface Props {
    children?: ReactNode;
    style?: ViewStyle;
    bigShadowStyle?: ViewStyle;
    smallShadowStyle?: ViewStyle;
}

export const Card = ({ children, style, bigShadowStyle, smallShadowStyle }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.sw.colors.neutral[50],
            borderColor: theme.sw.colors.neutral[50],
            borderWidth: 0,
            width: '100%',
            alignItems: 'center',
            padding: theme.sw.spacing.m,
            borderRadius: 20,
            ...style,
        },
        bigShadow: {
            shadowColor: theme.sw.colors.neutral[500],
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.12,
            shadowRadius: 24,
            ...bigShadowStyle,
        },
        smallShadow: {
            shadowColor: theme.sw.colors.neutral[500],
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.01,
            shadowRadius: 2,
            ...smallShadowStyle,
        },
    });

    return (
        <DropShadow style={styles.bigShadow}>
            <DropShadow style={styles.smallShadow}>
                <View style={styles.container}>{children}</View>
            </DropShadow>
        </DropShadow>
    );
};
