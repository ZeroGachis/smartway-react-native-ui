import React from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { DeleteButton } from './DeleteButton';
import { NumberButton } from './NumberButton';
import { SubmitButton } from './SubmitButton';
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

export type KeyboardActions = 'none' | 'type' | 'delete' | 'submit';
export interface KeyboardState {
    value?: string;
    action: KeyboardActions;
}
interface Props {
    setInputValue: ({ value }: KeyboardState) => void;
    disabled?: boolean;
    style?: ViewStyle;
}

export const Keyboard = ({ setInputValue, style }: Props) => {
    const theme = useTheme();

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
        },
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

        buttonRow: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <NumberButton value="1" onPress={handlePress} />
                <NumberButton value="2" onPress={handlePress} />
                <NumberButton value="3" onPress={handlePress} />
                <NumberButton value="4" onPress={handlePress} />
                <NumberButton value="5" onPress={handlePress} />
                <NumberButton value="6" onPress={handlePress} />
                <NumberButton value="7" onPress={handlePress} />
                <NumberButton value="8" onPress={handlePress} />
                <NumberButton value="9" onPress={handlePress} />
                <DeleteButton onPress={handlePress} />
                <NumberButton value="0" onPress={handlePress} />
                <SubmitButton onPress={handlePress} />
            </View>
        </View>
    );
};
