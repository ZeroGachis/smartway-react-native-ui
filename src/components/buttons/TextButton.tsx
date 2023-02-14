import React from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from "../../styles/themes";
import type { ButtonProps } from "./ButtonProps";


export const TextButton = ({ children, style, labelStyle}: ButtonProps) => {
    const theme = useTheme();
    const buttonstyle: ViewStyle = {
        padding: theme.sw.spacing.s,
        borderRadius: 0,
        ...style
    };

    const _labelStyle: TextStyle = {
        color: theme.sw.colors.primary[400],
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'PublicSans-Regular',
        ...labelStyle
    };
    return (
        <BaseButton mode="text" style={buttonstyle} labelStyle={_labelStyle}>
            {children}
        </BaseButton>
    );
};
