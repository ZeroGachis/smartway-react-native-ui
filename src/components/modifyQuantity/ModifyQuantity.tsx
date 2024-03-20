import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
import { Body } from '../typography/Body';
import { NumberSelector } from '../numberSelector/NumberSelector';
import { NumberValidator } from '../numberField/NumberValidator';

export interface Props {
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
            padding: theme.sw.spacing.m,
            backgroundColor: theme.sw.color.neutral[0],
            borderRadius: 24,
            justifyContent: 'space-between',
            elevation: 1,
            borderWidth: 1,
            borderColor: theme.sw.color.neutral[200],
            ...style,
        },
        text: {
            // TODO: use new tokens
            marginLeft: 12,
            color: theme.sw.color.neutral[800],
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
            marginHorizontal: theme.sw.spacing.m,
        },
        inputText: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    });

    const onEndEditing = (value: string | undefined) => {
        if (value) {
            onValueChange(Number(value));
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={{ transform: [{ rotate: '225deg' }] }}>
                    <Icon
                        size={24}
                        name={icon}
                        color={theme.sw.color.neutral[600]}
                    />
                </View>
                <Body style={styles.text}>{text}</Body>
            </View>
            <NumberSelector
                value={value}
                validator={new NumberValidator(minValue, maxValue, false)}
                initialValue={undefined}
                onEndEditing={onEndEditing}
            />
        </View>
    );
};
