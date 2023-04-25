import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { BaseButtonProps } from './BaseButtonProps';
import { getButtonColors } from './ButtonColors';

export const TextButton = ({
    children,
    style,
    labelStyle,
    onPress,
    status,
    disabled,
    testID,
}: BaseButtonProps) => {
    const theme = useTheme();

    const buttonColor = getButtonColors(theme, status, disabled);

    const styles = StyleSheet.create({
        button: {
            borderRadius: 0,
            ...style,
        },
        label: {
            color: buttonColor,
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
            onPress={onPress}
            testID={testID}
        >
            {children}
        </BaseButton>
    );
};
