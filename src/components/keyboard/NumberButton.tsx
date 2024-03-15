import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../styles/themes';
import type { KeyboardActions } from './Keyboard';

interface Props {
    value: string;
    onPress: (action: KeyboardActions, input?: string) => void;
}

export const NumberButton = ({ value, onPress }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        button: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: theme.sw.color.neutral[0],
        },
        buttonLabel: {
            fontSize: 24,
            textAlign: 'center',
            color: theme.sw.color.neutral[700],
        },
        icon: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <Pressable
            style={[styles.button]}
            onPress={() => onPress('type', value)}
        >
            <Text style={styles.buttonLabel}>{value}</Text>
        </Pressable>
    );
};
