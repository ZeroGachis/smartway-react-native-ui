import type { ReactNode } from 'react';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Button } from '../buttons/Button';
import { Icon } from '../icons/Icon';
import { Body } from '../typography/Body';
import DropShadow from 'react-native-drop-shadow';

interface Props {
    children?: ReactNode;
    bottomChildren: ReactNode;
    title?: string;
    titleColor: string;
    style?: ViewStyle;
    disabled?: boolean;
    onClose?: () => void;
    buttonTestID?: string;
}

export const ActionCard = ({
    children,
    style,
    title,
    titleColor,
    bottomChildren,
    disabled,
    onClose,
    buttonTestID,
}: Props) => {
    const theme = useTheme();

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
            paddingTop: theme.sw.spacing.m,
            textAlign: 'center',
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
        bigShadow: {
            shadowColor: '#919EAB1F',
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.12,
            shadowRadius: 24,
        },
        smallShadow: {
            shadowColor: '#919EAB80',
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
                    {onClose && (
                        <Button style={styles.close} onClick={onClose} testID={buttonTestID}>
                            <Icon name="close-fill" size={20} />
                        </Button>
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
            </DropShadow>
        </DropShadow>
    );
};
