import React, { useState } from 'react';
import { Alert, Dimensions, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

interface Props {
    inputValue: string;
    setInputValue: (text: string) => void;
}

export const Keyboard = ({ inputValue, setInputValue }: Props) => {
    const theme = useTheme();

    const handlePress = (input: string) => {
        setInputValue(inputValue + input);
    };
    const handleDelete = () => {
        setInputValue(inputValue.slice(0, -1));
    };

    const styles = StyleSheet.create({
        button: {
            height: SCREEN_HEIGHT * 0.0671,
            width: '30%',
            margin: theme.sw.spacing.xs,
        },
        buttonLabel: {
            fontSize: 24,
            textAlign: 'center',
            justifyContent: 'center',
            color: theme.sw.colors.neutral[700],
        },
        buttonRow: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
    });

    return (
        <View style={{}}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button]} onPress={() => handlePress('1')}>
                    <Text style={styles.buttonLabel}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
                    <Text style={styles.buttonLabel}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
                    <Text style={styles.buttonLabel}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
                    <Text style={styles.buttonLabel}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
                    <Text style={styles.buttonLabel}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
                    <Text style={styles.buttonLabel}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
                    <Text style={styles.buttonLabel}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
                    <Text style={styles.buttonLabel}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
                    <Text style={styles.buttonLabel}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={handleDelete}>
                    <Text style={styles.buttonLabel}>
                        <Icon size={28} color={theme.sw.colors.neutral[500]} name="backspace" />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
                    <Text style={styles.buttonLabel}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => Alert.alert("Let's go")}>
                    <Text style={styles.buttonLabel}>
                        <Icon color={theme.sw.colors.success[500]} size={28} name="keyboard-tab" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
