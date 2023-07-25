import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import type { BaseIconButtonProps } from './BaseIconButtonProps';
import { getButtonColors } from './ButtonColors';
import { Icon } from '../icons/Icon';

export const OutlinedIconButton = ({
    name,
    style,
    size,
    onClick,
    testID,
    disabled,
    status,
    hitSlop = 0,
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
        <Pressable style={styles.button} hitSlop={hitSlop} onPress={onClick} testID={testID}>
            <View style={styles.icon}>
                <Icon name={name} size={size} color={buttonColor} />
            </View>
        </Pressable>
    );
};
