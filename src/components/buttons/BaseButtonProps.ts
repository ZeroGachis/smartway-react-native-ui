import type { ReactNode } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';

export type ButtonStatus =
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
    onPress?: () => void;
    testID?: string;
    disabled?: boolean;
    status?: ButtonStatus;
}
