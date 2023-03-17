import React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { KeyboardActions } from './Keyboard';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

interface Props {
    onPress: (action: KeyboardActions) => void;
}

export const DeleteButton = ({ onPress }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        button: {
            height: SCREEN_HEIGHT * 0.0671,
            width: '33.3%',
            justifyContent: 'center',
            backgroundColor: theme.sw.colors.neutral[50],
        },
        icon: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <Pressable style={[styles.button]} onPress={() => onPress('delete')}>
            <View style={styles.icon}>
                <Icon name={'backspace'} color={theme.sw.colors.neutral[500]} size={24} />
            </View>
        </Pressable>
    );
};
