import React, { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { TextButton } from "./TextButton";
import { Button as BaseButton } from 'react-native-paper';

interface ButtonProps {
    mode?: 'text';
    children?: ReactNode;
    style: ViewStyle,
    labelStyle: TextStyle
}

export const Button = ({ mode = 'text', children, style, labelStyle}: ButtonProps) => {
    if (mode === 'text') {
        return <TextButton style={style} labelStyle={labelStyle}>{children}</TextButton>;
    }
    else {
        return <BaseButton style={style} labelStyle={labelStyle}>{children}</BaseButton>;
    }
};
