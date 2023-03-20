import React from 'react';
import { View, StyleSheet, Text, Pressable, ViewStyle } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';

interface Props {
    visible: boolean;
    message: string;
    actionLabel?: string;
    iconName?: IconName;
    onDismiss: () => void;
    duration?: number;
}

export const SnackBar = ({
    message,
    onDismiss,
    actionLabel,
    iconName = 'close',
    duration,
    visible,
}: Props) => {
    const theme = useTheme();

    const getStyles = () => {
        if (actionLabel && actionLabel.length < 10) {
            return {
                messageContainer: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                },
                actionContainer: {
                    flexDirection: 'row',
                },
            };
        } else {
            return {
                messageContainer: {
                    flexDirection: 'column',
                },
                actionContainer: {
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginRight: theme.sw.spacing.xl,
                    marginTop: theme.sw.spacing.s,
                },
            };
        }
    };

    const { messageContainer, actionContainer } = getStyles();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between',
        },
        snackBar: {
            backgroundColor: theme.sw.colors.neutral[800],
        },

        message: {
            flex: 1,
            color: theme.sw.colors.neutral[50],
            marginRight: theme.sw.spacing.xl,
        },
        actionLabel: {
            color: theme.sw.colors.primary[50],
            marginRight: theme.sw.spacing.l,
        },
    });

    return (
        <View style={styles.container}>
            <Snackbar
                duration={duration}
                visible={visible}
                onDismiss={onDismiss}
                style={styles.snackBar}
            >
                <View style={messageContainer as ViewStyle}>
                    <Text style={styles.message}>{message}</Text>
                    <Pressable hitSlop={8} style={actionContainer as ViewStyle} onPress={onDismiss}>
                        {actionLabel && <Text style={styles.actionLabel}>{actionLabel}</Text>}
                        {iconName && <Icon name={iconName} color={theme.sw.colors.primary[50]} />}
                    </Pressable>
                </View>
            </Snackbar>
        </View>
    );
};
