import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import { Body } from '../typography/Body';
export type ScanState = 'default' | 'selected' | 'filled';
interface Props {
    text: string;
    state: ScanState;
    style?: ViewStyle;
}

export const ScanInput = ({ text, state, style }: Props) => {
    const theme = useTheme();

    const getColors = () => {
        switch (state) {
            case 'default':
                return {
                    textColor: theme.sw.colors.neutral[500],
                    iconColor: theme.sw.colors.neutral[600],
                };
            case 'selected':
                return {
                    textColor: theme.sw.colors.neutral[500],
                    iconColor: theme.sw.colors.neutral[800],
                };
            case 'filled':
                return {
                    textColor: theme.sw.colors.neutral[800],
                    iconColor: theme.sw.colors.neutral[800],
                };
        }
    };

    const { textColor, iconColor } = getColors();

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            ...style,
        },
        text: {
            marginLeft: theme.sw.spacing.s,
            color: textColor,
        },
    });

    return (
        <View style={styles.container}>
            <Icon name="scan" size={24} color={iconColor} />
            <Body style={styles.text}>{text}</Body>
        </View>
    );
};
