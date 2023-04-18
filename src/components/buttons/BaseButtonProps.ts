import type { ReactNode } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';

type ButtonStatus =
    | 'default'
    | 'primary'
    | 'information'
    | 'success'
    | 'warning'
    | 'error'
    | 'neutral';
export interface BaseButtonProps {
    children?: ReactNode;
    style?: ViewStyle;
    labelStyle?: TextStyle;
    onClick?: () => void;
    testID?: string;
    disabled?: boolean;
    status?: ButtonStatus;
}
