import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { KeyboardActions } from './Keyboard';

interface Props {
    onPress: (action: KeyboardActions) => void;
    testID?: string;
}

export const DeleteButton = ({ onPress, testID }: Props) => {
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
        <Pressable testID={testID} style={[styles.button]} onPress={() => onPress('delete')}>
            <View style={styles.icon}>
                <Icon name={'backspace'} color={theme.sw.colors.neutral[500]} size={24} />
            </View>
        </Pressable>
    );
};
