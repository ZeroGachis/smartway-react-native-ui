import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
import { Body } from '../typography/Body';
import { Headline } from '../typography/Headline';

type AppBarType = 'default' | 'accordion';
interface Props {
    label?: string;
    onPress?: () => void;
    iconName?: IconName;
    style?: ViewStyle;
    children?: JSX.Element;
    type?: AppBarType;
    disabled?: boolean;
}
export const AppBar = ({
    label,
    onPress,
    iconName = 'arrow-back',
    style,
    children,
    type = 'default',
    disabled,
}: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        header: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: theme.sw.colors.neutral[50],
            ...style,
        },

        appBar: {
            backgroundColor: theme.sw.colors.neutral[50],
        },
        appBarAction: {
            justifyContent: 'center',
            marginRight: theme.sw.spacing.s,
        },
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            ...style,
        },
        touchableOpacity: {
            paddingHorizontal: theme.sw.spacing.l,
            paddingVertical: theme.sw.spacing.m,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.sw.colors.neutral[300],
            ...style,
        },
        body: {
            paddingRight: theme.sw.spacing.m,
            color: disabled ? theme.sw.colors.neutral[500] : theme.sw.colors.neutral[800],
        },
    });

    if (type === 'default') {
        return (
            <View style={styles.header}>
                <View style={styles.container}>
                    {onPress && (
                        <Pressable onPress={onPress} style={styles.appBarAction}>
                            <Icon size={20} name={iconName} />
                        </Pressable>
                    )}
                    <Headline size="h3">{label}</Headline>
                </View>
                {children}
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
                    <Body size="semi-bold" style={styles.body}>
                        {label}
                    </Body>
                    <Icon
                        color={
                            disabled ? theme.sw.colors.neutral[500] : theme.sw.colors.neutral[800]
                        }
                        name="arrow-down"
                    />
                </TouchableOpacity>
                {children}
            </View>
        );
    }
};
