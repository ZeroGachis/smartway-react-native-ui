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
    withIcon?: boolean;
    iconName?: IconName;
    onPress: () => void;
}

export const SnackBar = ({
    message,
    withIcon = false,
    onPress,
    actionLabel,
    iconName = 'close',
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
                    marginTop: 12,
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

        acionLabel: {
            flex: 1,
            color: theme.sw.colors.neutral[50],
            marginRight: 32,
        },
    });

    return (
        <View style={styles.container}>
            <Snackbar onDismiss={onPress} visible={visible} style={styles.snackBar}>
                <View style={messageContainer as ViewStyle}>
                    <Text style={styles.acionLabel}>{message}</Text>
                    <Pressable hitSlop={8} style={actionContainer as ViewStyle} onPress={onPress}>
                        {actionLabel && (
                            <Text style={{ color: '#B3E0D6', marginRight: 24 }}>{actionLabel}</Text>
                        )}
                        {withIcon && <Icon name={iconName} color="#B3E0D6" />}
                    </Pressable>
                </View>
            </Snackbar>
        </View>
    );
};
