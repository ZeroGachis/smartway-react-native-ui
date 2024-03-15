import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonBase } from 'react-native-paper';
import { useTheme } from '../../styles/themes';

type ButtonProps = React.ComponentProps<typeof ButtonBase>;
export interface customButtonProps extends ButtonProps {
    size?: 's' | 'm';
    variant?: 'filled' | 'outlined' | 'text';
    status?: 'primary' | 'default';
}
export const Button = (props: customButtonProps) => {
    const theme = useTheme();
    const mode =
        props.variant === 'filled' && props.status === 'primary'
            ? 'contained-tonal'
            : props.variant === 'filled'
            ? 'contained'
            : props.variant;
    const style = StyleSheet.create({
        button: {
            borderRadius: props?.size === 's' ? 14 : 18,
            height: props?.size === 's' ? 38 : 48,
        },
        label: {
            marginVertical: props?.size === 's' ? 6 : 11,
            marginHorizontal: props?.size === 's' ? 16 : 22,
            lineHeight: props?.size === 's' ? 24 : 26,
            fontSize: props?.size === 's' ? 14 : 16,
            fontFamily: 'PublicSans-Bold',
        },
    });
    let customStyle = undefined;
    if (mode === 'contained' || mode === undefined) {
        customStyle = StyleSheet.create({
            button: {},
            label: {
                color: props.disabled
                    ? theme.colors.onSurfaceDisabled
                    : theme.sw.color.neutral[0],
            },
        });
    }
    if ((mode === 'text' || mode === 'outlined') && props.status === 'primary') {
        customStyle = StyleSheet.create({
            button: {
                // TODO: use new tokens
                borderColor: theme.sw.color.primary[500] + '7A',
                backgroundColor: theme.sw.color.neutral[0],
            },
            label: {
                color: theme.colors.secondaryContainer,
            },
        });
    }
    if (mode === 'outlined' && (props.status === undefined || props.status === 'default')) {
        customStyle = StyleSheet.create({
            button: {
                borderColor: props.disabled
                    ? theme.sw.color.neutral[500] + '3D'
                    : theme.sw.color.neutral[800] + '7A',
            },
            label: {
                color: props.disabled
                    ? theme.colors.onSurfaceDisabled
                    : theme.sw.color.neutral[800],
            },
        });
    }
    return (
        <ButtonBase
            {...props}
            mode={mode ?? 'contained'}
            style={[style.button, props.style, customStyle ? customStyle.button : {}]}
            labelStyle={[style.label, props.labelStyle, customStyle ? customStyle.label : {}]}
        />
    );
};
