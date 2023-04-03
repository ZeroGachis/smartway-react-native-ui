import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
import { Body } from '../typography/Body';

interface Props {
    visible: boolean;
    message: string;
    actionLabel?: string;
    iconName?: IconName;
    callBack?: () => void;
    duration?: number;
    onClose: () => void;
}

export const SnackBar = ({
    message,
    callBack,
    actionLabel,
    iconName,
    duration = 4000,
    visible,
    onClose,
}: Props) => {
    const theme = useTheme();

    const handleCallBack = () => {
        callBack?.();
        onClose();
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        snackBar: {
            backgroundColor: theme.sw.colors.neutral[800],
            flexDirection: actionLabel && actionLabel.length > 10 ? 'column' : 'row',
        },
        message: {
            color: theme.sw.colors.neutral[50],
            marginRight: theme.sw.spacing.l,
        },
    });

    return (
        <View style={styles.container}>
            <Snackbar
                duration={duration}
                visible={visible}
                onDismiss={onClose}
                style={styles.snackBar}
                {...(callBack && {
                    action: {
                        textColor: theme.sw.colors.primary[200],
                        label: actionLabel || '',
                        onPress: handleCallBack,
                    },
                })}
                {...(iconName && {
                    onIconPress: onClose,
                    icon: () => (
                        <Icon name={iconName} size={16} color={theme.sw.colors.primary[50]} />
                    ),
                })}
                theme={{ colors: { inverseOnSurface: theme.sw.colors.primary[50] } }}
            >
                <Body size="medium" style={styles.message}>
                    {message}
                </Body>
            </Snackbar>
        </View>
    );
};
