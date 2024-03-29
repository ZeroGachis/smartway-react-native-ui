import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton as IconButtonBase } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';

type BaseIconButtonProps = React.ComponentProps<typeof IconButtonBase>;
type FilteredIconButtonProps = Pick<
    BaseIconButtonProps,
    Exclude<keyof BaseIconButtonProps, 'mode' | 'size' | 'icon'>
>;

interface customIconButtonProps extends FilteredIconButtonProps {
    size?: 's' | 'm';
    status?: 'primary' | 'default';
    variant?: 'filled' | 'outlined' | 'icon';
    icon: IconName;
}

export const IconButton = (props: customIconButtonProps) => {
    const theme = useTheme();
    // TODO: use new tokens
    const size = props.size === 's' ? 22 : 32;
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

    let iconColor = theme.sw.color.neutral[800];
    if (mode === 'contained') {
        iconColor = theme.colors.onPrimary;
    }
    if (mode === undefined || mode === 'outlined') {
        iconColor =
            props.status === 'default' || props.status === undefined
                ? theme.sw.color.neutral[800]
                : theme.sw.color.neutral[600];
    }
    if (props.disabled) {
        iconColor = theme.sw.color.neutral[500];
    }

    if (mode === 'outlined') {
        if (props.status === 'primary') {
            style.iconButton = {
                ...style.iconButton,
                // TODO: use new tokens
                ...{ borderColor: theme.sw.color.neutral[500] + '52' },
            };
        }
        if (props.status === 'default' || props.status === undefined) {
            style.iconButton = {
                ...style.iconButton,
                ...{ borderColor: theme.sw.color.neutral[500] },
            };
        }
        if (props.disabled) {
            style.iconButton = {
                ...style.iconButton,
                ...{
                    // TODO: use new tokens
                    borderColor: theme.sw.color.neutral[500] + '3D',
                },
            };
        }
    }

    return (
        <IconButtonBase
            {...props}
            mode={mode}
            style={[style.iconButton, props.style]}
            icon={() => (
                <Icon name={props.icon} size={size} color={iconColor} />
            )}
            size={size}
        />
    );
};
