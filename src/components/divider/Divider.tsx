import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';

interface Props {
    style?: ViewStyle;
    orientation?: 'vertical' | 'horizontal';
    dashed?: boolean;
}

export const Divider = ({ style, orientation = 'horizontal', dashed = false }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            ...style,
        },
        line: {
            borderBottomColor: theme.sw.colors.neutral[500] + theme.sw.transparency[24],
            borderRightColor: theme.sw.colors.neutral[500] + theme.sw.transparency[24],
            borderBottomWidth: orientation == 'horizontal' ? 2 : 0,
            width: orientation == 'horizontal' ? '100%' : 'auto',
            borderRightWidth: orientation == 'vertical' ? 2 : 0,
            height: orientation == 'vertical' ? '100%' : 'auto',
            borderStyle: dashed ? 'dashed' : 'solid',
        },
    });
    return (
        <View style={styles.container}>
            <View style={styles.line} />
        </View>
    );
};
