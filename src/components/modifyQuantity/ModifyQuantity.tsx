import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
import { Body } from '../typography/Body';
import { PlusMinusInput } from '../plusMinusInput/PlusMinusInput';

interface Props {
    text: string;
    value: number;
    onValueChange: (value: number) => void;
    minValue: number;
    maxValue: number;
    style?: ViewStyle;
    icon?: IconName;
}

export const ModifyQuantity = ({
    text,
    onValueChange,
    value,
    style,
    minValue,
    maxValue,
    icon = 'etiquette',
}: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme.sw.spacing.l,
            backgroundColor: theme.sw.colors.neutral[50],
            borderRadius: 24,
            justifyContent: 'space-between',
            elevation: 1,
            borderWidth: 1,
            borderColor: theme.sw.colors.neutral[200],
            ...style,
        },
        text: {
            marginLeft: theme.sw.spacing.s,
            color: theme.sw.colors.neutral[800],
        },
        iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        inputContainer: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        input: {
            marginBottom: 0,
            marginHorizontal: theme.sw.spacing.l,
        },
        inputText: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    });
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={{ transform: [{ rotate: '225deg' }] }}>
                    <Icon size={24} name={icon} color={theme.sw.colors.neutral[600]} />
                </View>
                <Body style={styles.text}>{text}</Body>
            </View>
            <PlusMinusInput
                minValue={minValue}
                maxValue={maxValue}
                onValueChange={onValueChange}
                value={value}
            />
        </View>
    );
};
