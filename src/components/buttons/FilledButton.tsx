import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { BaseButtonProps } from './BaseButtonProps';

export const FilledButton = ({
    children,
    style,
    labelStyle,
    onClick,
    testID,
    disabled,
    status,
}: BaseButtonProps) => {
    const theme = useTheme();

    const getbackgroundColor = (): ViewStyle['backgroundColor'] => {
        switch (status) {
            case 'primary':
                return theme.sw.colors.primary[400];
            case 'information':
                return theme.sw.colors.information[400];
            case 'success':
                return theme.sw.colors.success[400];
            case 'warning':
                return theme.sw.colors.warning[400];
            case 'error':
                return theme.sw.colors.error[400];
            default:
                return theme.sw.colors.neutral[700];
        }
    };

    const styles = StyleSheet.create({
        button: {
            borderRadius: 8,
            backgroundColor: disabled ? '#919EAB3D' : getbackgroundColor(),
            ...style,
        },
        label: {
            fontFamily: 'PublicSans-Regular',
            fontSize: 16,
            lineHeight: 26,
            color: disabled ? theme.sw.colors.neutral[500] : theme.sw.colors.neutral[50],
            paddingVertical: theme.sw.spacing.s,
            paddingHorizontal: theme.sw.spacing.l,
            fontWeight: 'bold',
            marginVertical: 0,
            marginHorizontal: 0,
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
