import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { BaseButtonProps } from './BaseButtonProps';

export const TextButton = ({
    children,
    style,
    labelStyle,
    onClick,
    status,
    disabled,
    testID,
}: BaseButtonProps) => {
    const theme = useTheme();

    const getLabelColor = (): TextStyle['color'] => {
        if (disabled) {
            return '#919EABCC';
        }
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
            borderRadius: 0,
            ...style,
        },
        label: {
            color: getLabelColor(),
            fontSize: 16,
            lineHeight: 26,
            fontFamily: 'PublicSans-Regular',
            padding: theme.sw.spacing.s,
            fontWeight: 'bold',
            // Overrides default margin of Paper component
            marginVertical: 0,
            marginHorizontal: 0,
            ...labelStyle,
        },
    });

    return (
        <BaseButton
            mode="text"
            style={styles.button}
            labelStyle={styles.label}
            onPress={onClick}
            testID={testID}
        >
            {children}
        </BaseButton>
    );
};
