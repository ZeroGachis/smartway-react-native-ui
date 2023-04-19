import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { BaseButtonProps } from './BaseButtonProps';
import { getButtonColors } from './ButtonColors';

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

    const buttonColor = getButtonColors(theme, status, disabled);
    const transparencyValue = '3D';

    const styles = StyleSheet.create({
        button: {
            borderRadius: 8,
            backgroundColor: disabled ? buttonColor + transparencyValue : buttonColor,
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
