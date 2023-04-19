import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { BaseButtonProps } from './BaseButtonProps';
import { getButtonColors } from './ButtonColors';

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
    const buttonColor = getButtonColors(theme, status, disabled);

    const styles = StyleSheet.create({
        button: {
            borderRadius: 8,
            borderWidth: 1,
            borderColor: buttonColor + transparencyValue,
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
            color: buttonColor,
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
