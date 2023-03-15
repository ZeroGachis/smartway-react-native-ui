import React from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { BaseButtonProps } from './BaseButtonProps';

export const FilledButton = ({ children, style, labelStyle, onClick, testID }: BaseButtonProps) => {
    const theme = useTheme();
    const buttonStyle: ViewStyle = {
        borderRadius: 8,
        backgroundColor: theme.sw.colors.primary[400],
        ...style,
    };

    const _labelStyle: TextStyle = {
        fontFamily: 'PublicSans-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: theme.sw.colors.neutral[50],
        paddingVertical: theme.sw.spacing.s,
        paddingHorizontal: theme.sw.spacing.l,
        // Overrides default margin of Paper component
        marginVertical: 0,
        marginHorizontal: 0,
        ...labelStyle,
    };

    return (
        <BaseButton style={buttonStyle} labelStyle={_labelStyle} onPress={onClick} testID={testID}>
            {children}
        </BaseButton>
    );
};
