import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";


export interface ButtonProps {
    children?: ReactNode,
    style?: ViewStyle,
    labelStyle?: TextStyle,
    onClick?: () => void,
}
