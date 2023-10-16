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

export interface Props {
    style?: ViewStyle;
    text: string;
    type: LabelType;
    labelColor?: LabelColor;
}

export const Label = ({ style, text, type, labelColor = 'neutral' }: Props) => {
    const theme = useTheme();

    const transparencyValue = theme.sw.transparency[16];

    const getColors = () => {
        switch (type) {
            case 'filled':
                return labelColor === 'neutral'
                    ? {
                          backgroundColor: theme.sw.colors.neutral[400],
                          color: theme.sw.colors.neutral[800],
                      }
                    : labelColor === 'primary'
                    ? {
                          backgroundColor: theme.sw.colors.primary.main,
                          color: theme.sw.colors.neutral[50],
                      }
                    : labelColor === 'secondary'
                    ? {
                          backgroundColor: theme.sw.colors.secondary[400],
                          color: theme.sw.colors.neutral[50],
                      }
                    : labelColor === 'information'
                    ? {
                          backgroundColor: theme.sw.colors.information[400],
                          color: theme.sw.colors.neutral[50],
                      }
                    : labelColor === 'success'
                    ? {
                          backgroundColor: theme.sw.colors.success[400],
                          color: theme.sw.colors.neutral[50],
                      }
                    : labelColor === 'warning'
                    ? {
                          backgroundColor: theme.sw.colors.warning[400],
                          color: theme.sw.colors.neutral[800],
                      }
                    : {
                          backgroundColor: theme.sw.colors.error['main'],
                          color: theme.sw.colors.neutral[50],
                      };
        }
        switch (type) {
            case 'soft':
                return labelColor === 'neutral'
                    ? {
                          backgroundColor: theme.sw.colors.neutral[50],
                          color: theme.sw.colors.neutral[800],
                      }
                    : labelColor === 'primary'
                    ? {
                          backgroundColor: theme.sw.colors.primary.main + transparencyValue,
                          color: theme.sw.colors.primary[600],
                      }
                    : labelColor === 'secondary'
                    ? {
                          backgroundColor: theme.sw.colors.secondary[400] + transparencyValue,
                          color: theme.sw.colors.secondary[600],
                      }
                    : labelColor === 'information'
                    ? {
                          backgroundColor: theme.sw.colors.information[400] + transparencyValue,
                          color: theme.sw.colors.information[600],
                      }
                    : labelColor === 'success'
                    ? {
                          backgroundColor: theme.sw.colors.success[400] + transparencyValue,
                          color: theme.sw.colors.success[600],
                      }
                    : labelColor === 'warning'
                    ? {
                          backgroundColor: theme.sw.colors.warning[400] + transparencyValue,
                          color: theme.sw.colors.warning[600],
                      }
                    : {
                          backgroundColor: theme.sw.colors.error['main'] + transparencyValue,
                          color: theme.sw.colors.error[600],
                      };
        }
        switch (type) {
            case 'outlined':
                return labelColor === 'neutral'
                    ? {
                          borderColor: theme.sw.colors.neutral[400],
                          color: theme.sw.colors.neutral[800],
                      }
                    : labelColor === 'primary'
                    ? {
                          borderColor: theme.sw.colors.primary.main,
                          color: theme.sw.colors.primary.main,
                      }
                    : labelColor === 'secondary'
                    ? {
                          borderColor: theme.sw.colors.secondary[400],
                          color: theme.sw.colors.secondary[400],
                      }
                    : labelColor === 'information'
                    ? {
                          borderColor: theme.sw.colors.information[400],
                          color: theme.sw.colors.information[400],
                      }
                    : labelColor === 'success'
                    ? {
                          borderColor: theme.sw.colors.success[400],
                          color: theme.sw.colors.success[400],
                      }
                    : labelColor === 'warning'
                    ? {
                          borderColor: theme.sw.colors.warning[400],
                          color: theme.sw.colors.warning[400],
                      }
                    : {
                          borderColor: theme.sw.colors.error['main'],
                          color: theme.sw.colors.error['main'],
                      };
        }
    };
    const { backgroundColor, color, borderColor } = getColors();

    const styles = StyleSheet.create({
        container: {
            borderWidth: type === 'outlined' ? 1 : 0,
            backgroundColor,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 8,
            borderColor,
            ...style,
        },
        text: {
            lineHeight: 20,
            color,
        },
    });
    return (
        <View style={styles.container}>
            <Body style={styles.text} size="B1" weight="bold">
                {text}
            </Body>
        </View>
    );
};
