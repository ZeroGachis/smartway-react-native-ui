import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { BaseButtonProps } from './BaseButtonProps';

export const OutlinedButton = ({
    children,
    style,
    labelStyle,
    onClick,
    status,
    disabled,
    testID,
}: BaseButtonProps) => {
    const theme = useTheme();

    const transparencyValue = '7A';

    const getColors = (): {
        color: TextStyle['color'];
        borderColor: ViewStyle['borderColor'];
    } => {
        if (disabled) {
            return { color: '#919EABCC', borderColor: '#919EAB3D' };
        }
        switch (status) {
            case 'primary':
                return {
                    color: theme.sw.colors.primary[400],
                    borderColor: theme.sw.colors.primary[400] + transparencyValue,
                };
            case 'information':
                return {
                    color: theme.sw.colors.information[400],
                    borderColor: theme.sw.colors.information[400] + transparencyValue,
                };
            case 'success':
                return {
                    color: theme.sw.colors.success[400],
                    borderColor: theme.sw.colors.success[400] + transparencyValue,
                };
            case 'warning':
                return {
                    color: theme.sw.colors.warning[400],
                    borderColor: theme.sw.colors.warning[400] + transparencyValue,
                };
            case 'error':
                return {
                    color: theme.sw.colors.error[400],
                    borderColor: theme.sw.colors.error[400] + transparencyValue,
                };
            default:
                return {
                    color: theme.sw.colors.neutral[700],
                    borderColor: theme.sw.colors.neutral[700] + transparencyValue,
                };
        }
    };

    const { borderColor, color } = getColors();

    const styles = StyleSheet.create({
        button: {
            borderRadius: 8,
            borderWidth: 1,
            borderColor,
            ...style,
        },
        label: {
            fontFamily: 'PublicSans-Regular',
            fontSize: 16,
            lineHeight: 26,
            fontWeight: 'bold',
            paddingVertical: theme.sw.spacing.s,
            paddingHorizontal: theme.sw.spacing.l,
            marginVertical: 0,
            marginHorizontal: 0,
            color,
            ...labelStyle,
        },
    });

    return (
        <BaseButton
            style={styles.button}
            labelStyle={styles.label}
            onPress={onClick}
            testID={testID}
        >
            {children}
        </BaseButton>
    );
};
