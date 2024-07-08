import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Theme, useTheme } from '../../styles/themes';

import { Body } from '../typography/Body';

type TagVariant = 'outlined' | 'filled' | 'soft';
type TagStatus =
    | 'error'
    | 'warning'
    | 'success'
    | 'information'
    | 'secondary'
    | 'primary'
    | 'neutral';

type Props = {
    text: string;
    status: TagStatus;
    variant: TagVariant;
    textStyle?: TextStyle;
    style?: ViewStyle;
    size?: 'm' | 's';
} & Omit<
    React.ComponentPropsWithoutRef<typeof Body>,
    'size' | 'weight' | 'variant' | 'style' | 'children'
>;

export const Tag = (props: Props) => {
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
                weight={'bold'}
            >
                {text}
            </Body>
        </View>
    );
};

function getColors(statusVariant: `${TagStatus}-${TagVariant}`, theme: Theme) {
    // TODO: use new tokens
    const transparencyValue = '29';
    const swColors = theme.sw.color;
    return (
        new Map<
            typeof statusVariant,
            { backgroundColor?: string; color?: string; borderColor?: string }
        >([
            [
                'primary-filled',
                {
                    backgroundColor: swColors.primary[500],
                    color: swColors.neutral[0],
                },
            ],
            [
                'primary-soft',
                {
                    backgroundColor: swColors.primary[500] + transparencyValue,
                    color: swColors.primary[700],
                },
            ],
            [
                'primary-outlined',
                {
                    borderColor: swColors.primary[500],
                    color: swColors.primary[500],
                },
            ],
            [
                'secondary-filled',
                {
                    backgroundColor: swColors.secondary[500],
                    color: swColors.neutral[0],
                },
            ],
            [
                'secondary-soft',
                {
                    backgroundColor:
                        swColors.secondary[500] + transparencyValue,
                    color: swColors.secondary[700],
                },
            ],
            [
                'secondary-outlined',
                {
                    borderColor: swColors.secondary[500],
                    color: swColors.secondary[500],
                },
            ],
            [
                'information-filled',
                {
                    backgroundColor: swColors.info[500],
                    color: swColors.neutral[0],
                },
            ],
            [
                'information-soft',
                {
                    backgroundColor: swColors.info[500] + transparencyValue,
                    color: swColors.info[700],
                },
            ],
            [
                'information-outlined',
                {
                    borderColor: swColors.info[500],
                    color: swColors.info[500],
                },
            ],
            [
                'success-filled',
                {
                    // TODO: use new tokens
                    backgroundColor: '#22c55e',
                    color: swColors.neutral[0],
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
                    // TODO: use new tokens
                    borderColor: '#22c55e',
                    color: '#22c55e',
                },
            ],
            [
                'warning-filled',
                {
                    // TODO: use new tokens
                    backgroundColor: '#f59e0b',
                    color: swColors.neutral[0],
                },
            ],
            [
                'warning-soft',
                {
                    // TODO: use new tokens
                    backgroundColor: '#f59e0b' + transparencyValue,
                    color: '#B76E00',
                },
            ],
            [
                'warning-outlined',
                {
                    // TODO: use new tokens
                    borderColor: '#f59e0b',
                    color: '#f59e0b',
                },
            ],
            [
                'error-filled',
                {
                    backgroundColor: swColors.error[500],
                    color: swColors.neutral[0],
                },
            ],
            [
                'error-soft',
                {
                    backgroundColor: swColors.error[500] + transparencyValue,
                    color: swColors.error[700],
                },
            ],
            [
                'error-outlined',
                {
                    borderColor: swColors.error[500],
                    color: swColors.error[500],
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
                    backgroundColor: swColors.neutral[0],
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
