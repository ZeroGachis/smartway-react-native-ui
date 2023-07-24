import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import { getButtonColors } from './ButtonColors';
import type { BaseIconButtonProps } from './BaseIconButtonProps';
import { Icon } from '../icons/Icon';

export const FilledIconButton = ({
    size,
    style,
    onClick,
    testID,
    disabled,
    status,
}: BaseIconButtonProps) => {
    const theme = useTheme();

    const buttonColor = getButtonColors(theme, status, disabled);
    const transparencyValue = '3D';

    const styles = StyleSheet.create({
        button: {
            borderRadius: 8,
            backgroundColor: disabled ? buttonColor + transparencyValue : buttonColor,
            ...style,
        },
        icon: {
            padding: 9,
            margin: 6,
        },
    });

    return (
        <TouchableHighlight style={styles.button} onPress={onClick} testID={testID}>
            <View style={styles.icon}>
                <Icon
                    name="arrow-back"
                    size={size}
                    color={disabled ? theme.sw.colors.neutral[500] : theme.sw.colors.neutral[50]}
                />
            </View>
        </TouchableHighlight>
    );
};
