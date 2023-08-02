import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton as IconButtonBase } from 'react-native-paper';
import { useTheme } from '../../styles/themes';

type BaseIconButtonProps = React.ComponentProps<typeof IconButtonBase>;
type FilteredIconButtonProps = Pick<
    BaseIconButtonProps,
    Exclude<keyof BaseIconButtonProps, 'mode' | 'size'>
>;
interface customIconButtonProps extends FilteredIconButtonProps {
    size?: 's' | 'm';
    status?: 'primary' | 'default';
    variant?: 'filled' | 'outlined' | 'icon';
}

export const IconButton = (props: customIconButtonProps) => {
    const theme = useTheme();
    const size = props.size === 's' ? theme.sw.iconbuttonsize.s : theme.sw.iconbuttonsize.m;
    const mode =
        props.variant === 'filled' && props.status === 'primary'
            ? 'contained-tonal'
            : props.variant === 'filled'
            ? 'contained'
            : props.variant === 'icon'
            ? undefined
            : props.variant;
    const style = StyleSheet.create({
        iconButton: {
            borderRadius: props.size === 's' ? 14 : 18,
            padding: 0,
            margin: 0,
        },
    });

    if (mode === 'contained-tonal') {
        style.iconButton = {
            ...style.iconButton,
            ...{ backgroundColor: theme.colors.surfaceDisabled },
        };
    }
    let editedProps = {
        iconColor: theme.sw.colors.neutral[800],
    };
    if (mode === 'contained') {
        editedProps = {
            iconColor: theme.colors.onPrimary,
        };
    }
    if (mode === undefined || mode === 'outlined') {
        editedProps = {
            iconColor:
                props.status === 'default' || props.status === undefined
                    ? theme.sw.colors.neutral[800]
                    : theme.sw.colors.neutral[600],
        };
    }

    if (mode === 'outlined') {
        if (props.status === 'primary') {
            style.iconButton = {
                ...style.iconButton,
                ...{ borderColor: theme.sw.colors.neutral[500] + theme.sw.transparency[32] },
            };
        }
        if (props.status === 'default' || props.status === undefined) {
            style.iconButton = {
                ...style.iconButton,
                ...{ borderColor: theme.sw.colors.neutral[800] + theme.sw.transparency[48] },
            };
        }
        if (props.disabled) {
            style.iconButton = {
                ...style.iconButton,
                ...{ borderColor: theme.sw.colors.neutral[500] + theme.sw.transparency[24] },
            };
        }
    }

    return (
        <IconButtonBase
            {...props}
            {...editedProps}
            mode={mode}
            style={[style.iconButton, props.style]}
            size={size}
        />
    );
};
