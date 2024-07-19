import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonBase } from 'react-native-paper';
import { useTheme, Theme } from '../../styles/themes';

type ButtonProps = Omit<
    React.ComponentProps<typeof ButtonBase>,
    'mode' &
        'dark' &
        'compact' &
        'color' &
        'buttonColor' &
        'textColor' &
        'rippleColor' &
        'loading' &
        'uppercase' &
        'background'
>;

type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonStatus = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error' | 'inherit';

export interface customButtonProps extends ButtonProps {
    size?: 's' | 'm';
    variant?: ButtonVariant;
    status?: ButtonStatus;
    disabled?: boolean;
}
export const Button = ({
    size = 'm',
    variant = 'filled',
    status = 'default',
    disabled = false,
    style,
    labelStyle,
    ...props
}: customButtonProps) => {
    const theme = useTheme();
    const mode = variant === 'filled' ? 'contained' : variant;
    const commonStyle = StyleSheet.create({
        button: {
            justifyContent: 'center',
            borderRadius: size === 's' ? theme.sw.borderRadius.s : theme.sw.borderRadius.m,
            height: size === 's' ? 38 : 48,
        },
        label: {
            marginVertical: size === 's' ? 6 : 11,
            marginHorizontal: size === 's' ? 16 : 22,
            fontSize:
                size === 's'
                    ? theme.sw.typography.button.n3!.fontSize
                    : theme.sw.typography.button.n1.fontSize,
            fontFamily:
                size === 's'
                    ? theme.sw.typography.button.n3!.fontFamily
                    : theme.sw.typography.button.n1.fontFamily,
            fontWeight:
                size === 's'
                    ? (theme.sw.typography.button.n3!.fontWeight as never)
                    : (theme.sw.typography.button.n1.fontWeight as never),
        },
    });

    const customStyle = StyleSheet.create({
        button: {
            borderColor: variant !== 'text' ? getButtonColor(status, theme) : undefined,
            backgroundColor: variant !== 'filled' ? undefined : getButtonColor(status, theme),
        },
        label: {
            color: getTextColor(variant, status, theme),
        },
    });

    const disabledStyle = StyleSheet.create({
        button: {
            borderColor: variant !== 'text' ? theme.sw.color.neutral[300] : undefined,
            backgroundColor: variant !== 'filled' ? undefined : theme.sw.color.neutral[300],
        },
        label: {
            color: theme.sw.color.neutral[500],
        },
    });

    return (
        <ButtonBase
            {...props}
            mode={mode}
            style={[
                commonStyle.button,
                customStyle.button,
                disabled && disabledStyle.button,
                style,
            ]}
            labelStyle={[
                commonStyle.label,
                customStyle.label,
                disabled && disabledStyle.label,
                labelStyle,
            ]}
            disabled={disabled}
        />
    );
};

const getButtonColor = (status: ButtonStatus, theme: Theme) => {
    switch (status) {
        case 'default':
            return theme.sw.color.neutral[700];
        case 'primary':
            return theme.sw.color.primary[500];
        case 'info':
            return theme.sw.color.info[500];
        case 'success':
            return theme.sw.color.success[500];
        case 'warning':
            return theme.sw.color.warning[500];
        case 'error':
            return theme.sw.color.error[500];
        case 'inherit':
            return theme.sw.color.neutral[300];
    }
};

const getTextColor = (variant: ButtonVariant, status: ButtonStatus, theme: Theme) => {
    if (status === 'inherit') {
        if (variant === 'filled') {
            return theme.sw.color.neutral[800];
        }
        return theme.sw.color.neutral[600];
    }
    if (variant === 'filled') {
        return theme.sw.color.neutral[0];
    }
    return getButtonColor(status, theme);
};
