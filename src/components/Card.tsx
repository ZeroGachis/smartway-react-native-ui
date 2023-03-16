import type { ReactNode } from 'react';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import { useTheme } from '../styles/themes';
import { Icon } from './icons/Icon';

import { Body } from './typography/Body';

interface Props {
    children?: ReactNode;
    bottomChildren: ReactNode;
    title: string;
    titleColor: string;
    style?: ViewStyle;
    disabled?: boolean;
    withClose?: boolean;
    onClose?: () => void;
}

export const Card = ({
    children,
    style,
    title,
    titleColor,
    bottomChildren,
    disabled,
    withClose = false,
    onClose,
}: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: disabled ? theme.sw.colors.neutral[100] : theme.sw.colors.neutral[50],
            borderWidth: 1,
            borderColor: disabled ? theme.sw.colors.neutral[400] : theme.sw.colors.neutral[200],
            width: '100%',
            borderRadius: 20,
            alignItems: 'center',
            ...style,
            elevation: 2,
        },
        close: {
            position: 'absolute',
            right: theme.sw.spacing.m,
            top: theme.sw.spacing.m,
        },
        title: {
            color: titleColor,
            paddingTop: theme.sw.spacing.m,
        },
        divider: {
            height: 1,
            width: '100%',
            backgroundColor: theme.sw.colors.neutral[200],
            marginVertical: theme.sw.spacing.xl,
        },
        bottomChildren: {
            paddingBottom: theme.sw.spacing.xl,
            alignItems: 'center',
        },
    });

    return (
        <View style={styles.container}>
            {withClose && (
                <TouchableOpacity style={styles.close} onPress={onClose}>
                    <Icon name="close-fill" size={20} />
                </TouchableOpacity>
            )}
            <Body size="semi-bold" style={styles.title}>
                {title}
            </Body>
            <View style={{ padding: theme.sw.spacing.m }}>{children}</View>
            {bottomChildren && (
                <View style={{ width: '100%' }}>
                    <View style={styles.divider} />
                    <View style={styles.bottomChildren}>{bottomChildren}</View>
                </View>
            )}
        </View>
    );
};
