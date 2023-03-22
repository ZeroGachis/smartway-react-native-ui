import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { DeleteButton } from './DeleteButton';
import { NumberButton } from './NumberButton';
import { SubmitButton } from './SubmitButton';

export type KeyboardActions = 'type' | 'delete' | 'submit';
export interface KeyboardState {
    value?: string;
    action: KeyboardActions;
}
interface Props {
    style?: ViewStyle;
    height: number;
    focusedInput: string;
    setValues: React.Dispatch<React.SetStateAction<any>>;
    onSubmit: () => void;
}

export const Keyboard = ({ style, height, focusedInput, setValues, onSubmit }: Props) => {
    const handlePress = (action: KeyboardActions, value?: string) => {
        if (!focusedInput) {
            return;
        }
        switch (action) {
            case 'type':
                setValues((prevState: any) => ({
                    ...prevState,
                    [focusedInput]: prevState[focusedInput] + value,
                }));
                break;
            case 'delete':
                setValues((prevState: any) => ({
                    ...prevState,
                    [focusedInput]: prevState[focusedInput].slice(0, -1),
                }));
                break;
            case 'submit':
                onSubmit();
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
