import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import type { BaseIconButtonProps } from './BaseIconButtonProps';
import { getButtonColors } from './ButtonColors';
import { Icon } from '../icons/Icon';

export const OutlinedIconButton = ({
    style,
    size,
    onClick,
    testID,
    disabled,
    status,
}: BaseIconButtonProps) => {
    const theme = useTheme();

    const buttonColor = getButtonColors(theme, status, disabled);
    const transparencyValue = '7A';

    const styles = StyleSheet.create({
        button: {
            borderRadius: 14,
            borderWidth: 1,
            borderColor: buttonColor + transparencyValue,
            ...style,
        },
        icon: {
            padding: 10,
            margin: 5,
        },
    });

    return (
        <TouchableHighlight style={styles.button} onPress={onClick} testID={testID}>
            <View style={styles.icon}>
                <Icon name="arrow-back" size={size} color={buttonColor} />
            </View>
        </TouchableHighlight>
    );
};
