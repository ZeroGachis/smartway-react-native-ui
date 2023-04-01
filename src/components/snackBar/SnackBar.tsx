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
    onDismiss?: () => void;
    duration?: number;
    onClose: () => void;
}

export const SnackBar = ({
    message,
    onDismiss,
    actionLabel,
    iconName,
    duration = 4000,
    visible,
    onClose,
}: Props) => {
    const theme = useTheme();

    const getStyles = () => {
        if ((actionLabel && actionLabel.length < 15) || !actionLabel) {
            return {
                messageContainer: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                },
                actionContainer: {
                    flexDirection: 'row',
                    alignItems: 'center',
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

                    width: '100%',
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
                onDismiss={onClose}
                style={styles.snackBar}
            >
                <View style={messageContainer as ViewStyle}>
                    <Text style={styles.message}>{message}</Text>
                    <View style={actionContainer as ViewStyle}>
                        <Pressable hitSlop={8} onPress={onDismiss}>
                            {actionLabel && <Text style={styles.actionLabel}>{actionLabel}</Text>}
                        </Pressable>
                        {iconName && (
                            <Pressable hitSlop={8} onPress={onClose}>
                                <Icon name={iconName} color={theme.sw.colors.primary[50]} />
                            </Pressable>
                        )}
                    </View>
                </View>
            </Snackbar>
        </View>
    );
};
