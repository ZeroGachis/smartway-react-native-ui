import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { useTheme } from '../../styles/themes';

interface Props {
    children?: ReactNode;
    style?: ViewStyle;
}

export const Card = ({ children, style }: Props) => {
    const theme = useTheme();

    const bigShadowTransparency = '1F';
    const smallShadowTransparency = '33';

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.sw.colors.neutral[50],
            width: '100%',
            alignItems: 'center',
            borderRadius: 20,
            padding: theme.sw.spacing.m,
            elevation: 1,
            ...style,
        },
        bigShadow: {
            shadowColor: theme.sw.colors.neutral[500] + bigShadowTransparency,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.12,
            shadowRadius: 24,
        },
        smallShadow: {
            shadowColor: theme.sw.colors.neutral[500] + smallShadowTransparency,
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
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
