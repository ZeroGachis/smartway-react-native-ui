import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { Body } from '../typography/Body';
import { Theme, useTheme } from '../../styles/themes';
import type { WithTestID } from 'src/shared/type';

type BadgeProps = WithTestID<{
    number: number;
    maxDigits?: number;
    style?: ViewStyle;
}>;

const createStyle = (theme: Theme, style?: ViewStyle) => {
    return StyleSheet.create({
        badge: {
            backgroundColor: theme.sw.colors.neutral[700],
            color: theme.sw.colors.neutral[50],
            paddingHorizontal: theme.sw.spacing.xs,
            paddingVertical: theme.sw.spacing.xxs,
            alignSelf: 'flex-start',
            borderRadius: 8,
            ...style,
        },
    });
};

export const Badge = ({ number, maxDigits, testID, style }: BadgeProps) => {
    const theme = useTheme();

    const displayText = maxDigits
        ? getTruncatedNumber(number, maxDigits)
        : number;

    const badgeStyle = createStyle(theme, style).badge;

    return (
        <Body size='B2' weight='semi-bold' style={badgeStyle} testID={testID}>
            {displayText}
        </Body>
    );
};

function getTruncatedNumber(number: number, maxDigits: number): string {
    const maxNumber = Math.pow(10, maxDigits) - 1;
    const isTruncated = number > maxNumber;
    return isTruncated ? `${maxNumber}+` : `${number}`;
}
