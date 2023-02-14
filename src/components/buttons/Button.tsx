import React, { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { TextButton } from "./TextButton";
import { Button as BaseButton } from 'react-native-paper';
import { FilledButton } from "./FilledButton";

interface ButtonProps {
    mode?: 'text' | 'filled';
    children?: ReactNode;
    style?: ViewStyle,
    labelStyle?: TextStyle
}

export const Button = ({ mode = 'text', children, style, labelStyle}: ButtonProps) => {
    if (mode === 'text') {
        return <TextButton style={style} labelStyle={labelStyle}>{children}</TextButton>;
    }
    else if (mode === 'filled') {
        return <FilledButton style={style} labelStyle={labelStyle}>{children}</FilledButton>
    }
    else {
        return <BaseButton style={style} labelStyle={labelStyle}>{children}</BaseButton>;
    }
};
