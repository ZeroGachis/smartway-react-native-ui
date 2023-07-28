import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton as IconButtonBase } from 'react-native-paper';
import { useTheme } from '../../styles/themes';

type IconButtonProps = React.ComponentProps<typeof IconButtonBase>;
interface customIconButtonProps extends IconButtonProps {
    scale?: 's' | 'm';
    status?: 'primary' | 'default';
}

export const IconButton = (iconButtonProps: customIconButtonProps) => {
    const theme = useTheme();
    const size =
        iconButtonProps.scale === 's' ? theme.sw.iconbuttonsize.s : theme.sw.iconbuttonsize.m;
    const style = StyleSheet.create({
        iconButton: {
            borderRadius: Number(size) * 0.6,
        },
    });

    if (iconButtonProps.mode === 'contained-tonal') {
        style.iconButton = {
            ...style.iconButton,
            ...{ backgroundColor: theme.colors.surfaceDisabled },
        };
    }
    let editedIconButtonProps = {
        iconColor: theme.sw.colors.neutral[800],
    };
    if (iconButtonProps.mode === 'contained') {
        editedIconButtonProps = {
            iconColor: theme.colors.onPrimary,
        };
    }
    if (iconButtonProps.mode === undefined || iconButtonProps.mode === 'outlined') {
        editedIconButtonProps = {
            iconColor: theme.sw.colors.neutral[600],
        };
    }
    if (
        (iconButtonProps.mode === undefined || iconButtonProps.mode === 'contained') &&
        iconButtonProps.disabled &&
        iconButtonProps.scale === 's'
    ) {
        style.iconButton = {
            ...style.iconButton,
            ...{ backgroundColor: theme.colors.onPrimary },
        };
    }

    if (iconButtonProps.mode === 'outlined') {
        if (iconButtonProps.status === 'primary') {
            style.iconButton = {
                ...style.iconButton,
                ...{ borderColor: theme.sw.colors.neutral[500] + theme.sw.transparency[32] },
            };
        }
        if (iconButtonProps.status === 'default' || iconButtonProps.status === undefined) {
            style.iconButton = {
                ...style.iconButton,
                ...{ borderColor: theme.sw.colors.neutral[800] + theme.sw.transparency[48] },
            };
        }
        if (iconButtonProps.disabled) {
            style.iconButton = {
                ...style.iconButton,
                ...{ borderColor: theme.sw.colors.neutral[500] + theme.sw.transparency[24] },
            };
        }
    }

    if (
        iconButtonProps.disabled &&
        iconButtonProps.mode === 'outlined' &&
        iconButtonProps.scale === 's'
    ) {
        editedIconButtonProps = {
            iconColor: theme.sw.colors.neutral[600],
            ...{ backgroundColor: theme.colors.surfaceDisabled },
        };
    }

    return (
        <IconButtonBase
            {...iconButtonProps}
            {...editedIconButtonProps}
            style={style.iconButton}
            size={size}
        />
    );
};
