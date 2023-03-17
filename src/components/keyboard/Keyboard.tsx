import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { DeleteButton } from './DeleteButton';
import { NumberButton } from './NumberButton';
import { SubmitButton } from './SubmitButton';

export type KeyboardActions = 'none' | 'type' | 'delete' | 'submit';
export interface KeyboardState {
    value?: string;
    action: KeyboardActions;
}
interface Props {
    setInputValue: ({ value }: KeyboardState) => void;
    style?: ViewStyle;
    height: number;
}

export const Keyboard = ({ setInputValue, style, height }: Props) => {
    const handlePress = (action: KeyboardActions, value?: string) => {
        switch (action) {
            case 'type':
                setInputValue({ action: 'type', value });
                break;
            case 'delete':
                setInputValue({ action: 'delete' });
                break;
            case 'submit':
                setInputValue({ action: 'submit' });
        }
    };

    const styles = StyleSheet.create({
        container: {
            ...style,
            width: '100%',
            height,
        },

        keyboardRow: {
            flexDirection: 'row',
            height: '25%',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.keyboardRow}>
                <NumberButton value="1" onPress={handlePress} />
                <NumberButton value="2" onPress={handlePress} />
                <NumberButton value="3" onPress={handlePress} />
            </View>
            <View style={styles.keyboardRow}>
                <NumberButton value="4" onPress={handlePress} />
                <NumberButton value="5" onPress={handlePress} />
                <NumberButton value="6" onPress={handlePress} />
            </View>
            <View style={styles.keyboardRow}>
                <NumberButton value="7" onPress={handlePress} />
                <NumberButton value="8" onPress={handlePress} />
                <NumberButton value="9" onPress={handlePress} />
            </View>
            <View style={styles.keyboardRow}>
                <DeleteButton onPress={handlePress} />
                <NumberButton value="0" onPress={handlePress} />
                <SubmitButton onPress={handlePress} />
            </View>
        </View>
    );
};
