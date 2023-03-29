import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';

import { Body } from '../typography/Body';

type LabelType = 'outlined' | 'filled' | 'soft';
type LabelColor =
    | 'error'
    | 'warning'
    | 'success'
    | 'information'
    | 'secondary'
    | 'primary'
    | 'neutral';

interface Props {
    style?: ViewStyle;
    text: string;
    type: LabelType;
    labelColor?: LabelColor;
}

export const Label = ({ style, text, type, labelColor = 'neutral' }: Props) => {
    const theme = useTheme();

    const transparencyValue = '29';

    const getColors = () => {
        if (labelColor === 'neutral') {
            switch (type) {
                case 'filled':
                    return {
                        backgroundColor: theme.sw.colors[labelColor][400],
                        color: theme.sw.colors.neutral[800],
                    };
                case 'soft':
                    return {
                        backgroundColor: theme.sw.colors[labelColor][500] + transparencyValue,
                        color: theme.sw.colors.neutral[800],
                    };
                case 'outlined':
                    return {
                        borderColor: theme.sw.colors[labelColor][400],
                        color: theme.sw.colors.neutral[800],
                    };
            }
        }
        switch (type) {
            case 'filled':
                return {
                    backgroundColor: theme.sw.colors[labelColor][400],
                    color:
                        labelColor === 'warning'
                            ? theme.sw.colors.neutral[800]
                            : theme.sw.colors.neutral[50],
                };
            case 'soft':
                return {
                    backgroundColor: theme.sw.colors[labelColor][400] + transparencyValue,
                    color: theme.sw.colors[labelColor][600],
                };
            case 'outlined':
                return {
                    borderColor: theme.sw.colors[labelColor][400],
                    color: theme.sw.colors[labelColor][400],
                };
        }
    };
    const { backgroundColor, color, borderColor } = getColors();

    const styles = StyleSheet.create({
        container: {
            borderWidth: type === 'outlined' ? 1 : 0,
            backgroundColor,
            paddingHorizontal: theme.sw.spacing.xs,
            paddingVertical: 2,
            borderRadius: 6,
            borderColor,
            ...style,
        },
        text: {
            lineHeight: 20,
            fontWeight: '700',
            color,
        },
    });
    return (
        <View style={styles.container}>
            <Body style={styles.text} size="small">
                {text}
            </Body>
        </View>
    );
};
