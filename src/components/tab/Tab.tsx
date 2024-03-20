import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Body } from '../typography/Body';

export interface Props {
    selected?: boolean;
    text: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const Tab = ({ selected, text, onPress, style, textStyle }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        tab: {
            flexGrow: 1,
            borderBottomWidth: 2,
            borderBottomColor: selected
                ? theme.sw.color.primary[500]
                : theme.sw.color.neutral[200],

            padding: theme.sw.spacing.s,
            ...style,
        },
        text: {
            textAlign: 'center',
            color: selected ? theme.sw.color.primary[500] : theme.sw.color.neutral[800],
            ...textStyle,
        },
    });

    return (
        <TouchableOpacity style={styles.tab} onPress={onPress}>
            <Body style={styles.text}>{text}</Body>
        </TouchableOpacity>
    );
};
