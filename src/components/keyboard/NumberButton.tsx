import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../styles/themes';
import type { KeyboardActions } from './Keyboard';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

interface Props {
    value: string;
    onPress: (action: KeyboardActions, input?: string) => void;
}

export const NumberButton = ({ value, onPress }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        button: {
            height: SCREEN_HEIGHT * 0.0671,
            width: '33.3%',
            justifyContent: 'center',
            backgroundColor: theme.sw.colors.neutral[50],
        },
        buttonLabel: {
            fontSize: 24,
            textAlign: 'center',
            color: theme.sw.colors.neutral[700],
        },
        icon: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <Pressable style={[styles.button]} onPress={() => onPress('type', value)}>
            <Text style={styles.buttonLabel}>{value}</Text>
        </Pressable>
    );
};
