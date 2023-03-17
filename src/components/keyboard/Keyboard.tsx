import React from 'react';
import {
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    ViewStyle,
    Pressable,
} from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

export type KeyboardActions = 'none' | 'type' | 'delete' | 'submit';
interface KeyboardData {
    value?: string;
    action: KeyboardActions;
    icon?: IconName;
    iconColor?: string;
}

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

    const keyboardData: KeyboardData[] = [
        { value: '1', action: 'type' },
        { value: '2', action: 'type' },
        { value: '3', action: 'type' },
        { value: '4', action: 'type' },
        { value: '5', action: 'type' },
        { value: '6', action: 'type' },
        { value: '7', action: 'type' },
        { value: '8', action: 'type' },
        { value: '9', action: 'type' },
        { action: 'delete', icon: 'backspace', iconColor: theme.sw.colors.neutral[500] },
        { value: '0', action: 'submit' },
        { action: 'submit', icon: 'keyboard-tab', iconColor: theme.sw.colors.primary[400] },
    ];

    const handlePress = (input: string, action: KeyboardActions) => {
        switch (action) {
            case 'type':
                setInputValue({ action: 'type', value: input });
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
        icon: {
            justifyContent: 'center',
            alignItems: 'center',
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
                {keyboardData.map((item, index) => (
                    <Pressable
                        key={index}
                        style={[styles.button]}
                        onPress={() => handlePress(item.value, item.action)}
                    >
                        {item.icon ? (
                            <View style={styles.icon}>
                                <Icon name={item.icon} color={item.iconColor} size={24} />
                            </View>
                        ) : (
                            <Text style={styles.buttonLabel}>{item.value}</Text>
                        )}
                    </Pressable>
                ))}
            </View>
        </View>
    );
};
