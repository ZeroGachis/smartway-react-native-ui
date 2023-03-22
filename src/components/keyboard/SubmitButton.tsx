import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { KeyboardActions } from './Keyboard';

interface Props {
    onPress: (action: KeyboardActions) => void;
}

export const SubmitButton = ({ onPress }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        button: {
            flex: 1,

            justifyContent: 'center',
            backgroundColor: theme.sw.colors.neutral[50],
        },
        icon: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <Pressable style={[styles.button]} onPress={() => onPress('submit')}>
            <View style={styles.icon}>
                <Icon name={'keyboard-tab'} color={theme.sw.colors.primary[400]} size={24} />
            </View>
        </Pressable>
    );
};