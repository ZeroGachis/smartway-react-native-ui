import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Theme, useTheme } from '../../styles/themes';

import { Body } from '../typography/Body';

type LabelVariant = 'outlined' | 'filled' | 'soft';
type LabelStatus =
    | 'error'
    | 'warning'
    | 'success'
    | 'information'
    | 'secondary'
    | 'primary'
    | 'neutral';

type Props = {
    text: string;
    status: LabelStatus;
    variant: LabelVariant;
    textStyle?: TextStyle;
    style?: ViewStyle;
    size?: 'm' | 's';
} & Omit<
    React.ComponentPropsWithoutRef<typeof Body>,
    'size' | 'weight' | 'variant' | 'style' | 'children'
>;

export const Label = (props: Props) => {
    const {
        style,
        textStyle,
        text,
        variant = 'filled',
        status = 'neutral',
        size = 'm',
        ...bodyProps
    } = props;
    const theme = useTheme();

    const { backgroundColor, color, borderColor } = getColors(
        `${status}-${variant}`,
        theme,
    );

    const styles = StyleSheet.create({
        container: {
            borderWidth: variant.endsWith('outlined') ? 1 : 0,
            backgroundColor,
            paddingHorizontal: size == 'm' ? 10 : 8,
            paddingVertical: 4,
            borderRadius: 8,
            borderColor,
            ...style,
        },
        text: {
            lineHeight: size === 'm' ? 20 : undefined,
            color,
            ...textStyle,
        },
    });
    return (
        <View style={styles.container}>
            <Body
                {...bodyProps}
                style={styles.text}
                size={size == 'm' ? 'B1' : 'B2'}
                weight={size == 'm' ? 'bold' : 'semi-bold'}
            >
                {text}
            </Body>
        </View>
    );
};

function getColors(
    statusVariant: `${LabelStatus}-${LabelVariant}`,
    theme: Theme,
) {
    const transparencyValue = theme.sw.transparency[16];
    const swColors = theme.sw.colors;
    return (
        new Map<
            typeof statusVariant,
            { backgroundColor?: string; color?: string; borderColor?: string }
        >([
            [
                'primary-filled',
                {
                    backgroundColor: swColors.primary.main,
                    color: swColors.neutral[50],
                },
            ],
            [
                'primary-soft',
                {
                    backgroundColor: swColors.primary.main + transparencyValue,
                    color: swColors.primary[600],
                },
            ],
            [
                'primary-outlined',
                {
                    borderColor: swColors.primary.main,
                    color: swColors.primary.main,
                },
            ],
            [
                'secondary-filled',
                {
                    backgroundColor: swColors.secondary[400],
                    color: swColors.neutral[50],
                },
            ],
            [
                'secondary-soft',
                {
                    backgroundColor:
                        swColors.secondary[400] + transparencyValue,
                    color: swColors.secondary[600],
                },
            ],
            [
                'secondary-outlined',
                {
                    borderColor: swColors.secondary[400],
                    color: swColors.secondary[400],
                },
            ],
            [
                'information-filled',
                {
                    backgroundColor: swColors.information[400],
                    color: swColors.neutral[50],
                },
            ],
            [
                'information-soft',
                {
                    backgroundColor:
                        swColors.information[400] + transparencyValue,
                    color: swColors.information[600],
                },
            ],
            [
                'information-outlined',
                {
                    borderColor: swColors.information[400],
                    color: swColors.information[400],
                },
            ],
            [
                'success-filled',
                {
                    backgroundColor: swColors.success[400],
                    color: swColors.neutral[50],
                },
            ],
            [
                'success-soft',
                {
                    backgroundColor: swColors.success[400] + transparencyValue,
                    color: swColors.success[600],
                },
            ],
            [
                'success-outlined',
                {
                    borderColor: swColors.success[400],
                    color: swColors.success[400],
                },
            ],
            [
                'warning-filled',
                {
                    backgroundColor: swColors.warning[400],
                    color: swColors.neutral[800],
                },
            ],
            [
                'warning-soft',
                {
                    backgroundColor: swColors.warning[400] + transparencyValue,
                    color: swColors.warning[600],
                },
            ],
            [
                'warning-outlined',
                {
                    borderColor: swColors.warning[400],
                    color: swColors.warning[400],
                },
            ],
            [
                'error-filled',
                {
                    backgroundColor: swColors.error['main'],
                    color: swColors.neutral[50],
                },
            ],
            [
                'error-soft',
                {
                    backgroundColor: swColors.error['main'] + transparencyValue,
                    color: swColors.error[600],
                },
            ],
            [
                'error-outlined',
                {
                    borderColor: swColors.error['main'],
                    color: swColors.error['main'],
                },
            ],
            [
                'neutral-filled',
                {
                    backgroundColor: swColors.neutral[400],
                    color: swColors.neutral[800],
                },
            ],
            [
                'neutral-soft',
                {
                    backgroundColor: swColors.neutral[50],
                    color: swColors.neutral[800],
                },
            ],
            [
                'neutral-outlined',
                {
                    borderColor: swColors.neutral[400],
                    color: swColors.neutral[500],
                },
            ],
        ]).get(statusVariant) || {
            backgroundColor: swColors.neutral[400],
            color: swColors.neutral[800],
        }
    );
}
