import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';

interface Props extends TextInputProps {
    value: string;
    style?: ViewStyle;
}

export const EANInput = ({ value, style, ...props }: Props) => {
    const theme = useTheme();

    const [focused, setFocused] = useState<boolean>(false);

    const getIconColor = () => {
        if (focused || value.length > 0) {
            return theme.sw.colors.neutral[800];
        } else {
            return theme.sw.colors.neutral[600];
        }
    };

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            ...style,
        },
        input: {
            marginLeft: theme.sw.spacing.xs,
            fontSize: 16,
        },
    });

    return (
        <View style={styles.container}>
            <Icon name="scan" size={24} color={getIconColor()} />
            <TextInput
                style={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={value}
                placeholderTextColor={theme.sw.colors.neutral[500]}
                {...props}
            />
        </View>
    );
};
