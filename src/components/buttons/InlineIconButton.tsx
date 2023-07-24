import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import { getButtonColors } from './ButtonColors';
import type { BaseIconButtonProps } from './BaseIconButtonProps';
import { Icon } from '../icons/Icon';

export const InlineIconButton = ({
    size,
    style,
    onClick,
    testID,
    disabled,
    status,
}: BaseIconButtonProps) => {
    const theme = useTheme();

    const buttonColor = getButtonColors(theme, status, disabled);

    const styles = StyleSheet.create({
        button: {
            borderRadius: 0,
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
                <Icon name="arrow-back" size={size} color={buttonColor} />
            </View>
        </TouchableHighlight>
    );
};
