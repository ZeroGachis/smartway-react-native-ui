import type { ReactNode } from 'react';
import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import { Body } from '../typography/Body';
import DropShadow from 'react-native-drop-shadow';

interface Props {
    children: ReactNode;
    bottomChildren: ReactNode;
    title?: string;
    titleColor: string;
    style?: ViewStyle;
    disabled?: boolean;
    onClear?: () => void;
    displayClear?: boolean;
    buttonTestID?: string;
}

export const ActionCard = ({
    children,
    style,
    title,
    titleColor,
    bottomChildren,
    disabled,
    onClear,
    displayClear = false,
    buttonTestID,
}: Props) => {
    const theme = useTheme();

    const bigShadowTransparency = '1F';
    const smallShadowTransparency = '80';

    const styles = StyleSheet.create({
        container: {
            backgroundColor: disabled ? theme.sw.colors.neutral[100] : theme.sw.colors.neutral[50],
            borderWidth: 1,
            borderColor: disabled ? theme.sw.colors.neutral[400] : theme.sw.colors.neutral[400],
            width: '100%',
            borderRadius: 20,
            alignItems: 'center',
            ...style,
        },
        close: {
            position: 'absolute',
            right: theme.sw.spacing.m,
            top: theme.sw.spacing.m,
        },
        title: {
            color: titleColor,
            paddingBottom: theme.sw.spacing.m,
            textAlign: 'center',
        },
        divider: {
            height: 1,
            width: '100%',
            backgroundColor: theme.sw.colors.neutral[200],
            marginTop: theme.sw.spacing.m,
            marginBottom: theme.sw.spacing.xs,
        },
        bottomChildren: {
            alignItems: 'center',
        },
        bigShadow: {
            shadowColor: theme.sw.colors.neutral[500] + bigShadowTransparency,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.12,
            shadowRadius: 24,
        },
        smallShadow: {
            shadowColor: theme.sw.colors.neutral[500] + smallShadowTransparency,
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
        },
    });

    return (
        <DropShadow style={styles.bigShadow}>
            <DropShadow style={styles.smallShadow}>
                <View style={styles.container}>
                    <Body style={styles.title}>{title}</Body>
                    {displayClear && (
                        <Pressable style={styles.close} onPress={onClear} testID={buttonTestID}>
                            <Icon name="close-fill" size={20} />
                        </Pressable>
                    )}
                    <View>{children}</View>

                    <View style={{ width: '100%' }}>
                        <View style={styles.divider} />
                        <View style={styles.bottomChildren}>{bottomChildren}</View>
                    </View>
                </View>
            </DropShadow>
        </DropShadow>
    );
};
