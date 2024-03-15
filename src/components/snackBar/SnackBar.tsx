import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
import { Body } from '../typography/Body';

export interface Props {
    visible: boolean;
    message: string;
    iconName?: IconName;
    duration?: number;
    onDismiss: () => void;
    action?: Omit<React.ComponentProps<typeof Button>, 'children'> & {
        label: string;
    };
}

/** @deprecated will be replaced by Snackbar soon*/
export const SnackBar = ({
    message,
    iconName,
    duration = 4000,
    visible,
    onDismiss,
    action,
}: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        snackBar: {
            backgroundColor: theme.sw.color.neutral[800],
            flexDirection:
                action?.label && action?.label.length > 10 ? 'column' : 'row',
        },
        message: {
            color: theme.sw.color.neutral[0],
            marginRight: theme.sw.spacing.m,
        },
    });

    return (
        <View style={styles.container}>
            <Snackbar
                duration={duration}
                visible={visible}
                onDismiss={onDismiss}
                style={styles.snackBar}
                action={
                    action && {
                        ...action,
                        textColor: theme.sw.color.primary[300],
                    }
                }
                {...(iconName && {
                    onIconPress: onDismiss,
                    icon: () => (
                        <Icon name={iconName} size={16} color={'#C5FCF0'} />
                    ),
                })}
                theme={{
                    colors: { inverseOnSurface: '#C5FCF0' },
                }}
            >
                <Body size='B2' style={styles.message}>
                    {message}
                </Body>
            </Snackbar>
        </View>
    );
};
