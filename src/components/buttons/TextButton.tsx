import React from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { BaseButtonProps } from './BaseButtonProps';

export const TextButton = ({ children, style, labelStyle, onClick }: BaseButtonProps) => {
    const theme = useTheme();
    const buttonstyle: ViewStyle = {
        borderRadius: 0,
        ...style,
    };

    const _labelStyle: TextStyle = {
        color: theme.sw.colors.primary[400],
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'PublicSans-Regular',
        padding: theme.sw.spacing.s,
        // Overrides default margin of Paper component
        marginVertical: 0,
        marginHorizontal: 0,
        ...labelStyle,
    };
    return (
        <BaseButton mode="text" style={buttonstyle} labelStyle={_labelStyle} onPress={onClick}>
            {children}
        </BaseButton>
    );
};
