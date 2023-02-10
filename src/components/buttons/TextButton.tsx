import React, { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { Button as BaseButton } from 'react-native-paper';
import { useTheme } from "smartway-react-native-ui";


interface Props {
    children?: ReactNode,
    style: ViewStyle,
    labelStyle: TextStyle,
}

export const TextButton = ({ children, style, labelStyle}: Props) => {
    const theme = useTheme();
    const buttonstyle: ViewStyle = {
        padding: 12,
        borderRadius: 0,
        ...style
    };

    const _labelStyle: TextStyle = {
        color: theme.sw.colors.primary[400],
        fontSize: 16,
        lineHeight: 19,
        ...labelStyle
    };
    return (
        <BaseButton mode="text" style={buttonstyle} labelStyle={_labelStyle}>
            {children}
        </BaseButton>
    );
};
