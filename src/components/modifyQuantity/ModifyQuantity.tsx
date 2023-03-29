import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
import { TextInput } from '../inputs/TextInput';
import { Body } from '../typography/Body';

interface Props {
    text: string;
    value: number;
    onValueChange: (value: number) => void;
    minValue: number;
    maxValue: number;
    style?: ViewStyle;
    inputValue: number;
    icon?: IconName;
}

export const ModifyQuantity = ({
    text,
    onValueChange,
    value,
    style,
    inputValue,
    minValue,
    maxValue,
    icon = 'etiquette',
}: Props) => {
    const theme = useTheme();

    const onAdd = () => {
        onValueChange(value + 1);
    };
    const onMinus = () => {
        onValueChange(value - 1);
    };

    const minusDisabled = minValue >= inputValue;
    const addDisabled = maxValue <= inputValue;

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
            <View style={styles.inputContainer}>
                <Pressable disabled={minusDisabled} hitSlop={8} onPress={onMinus}>
                    <Icon
                        size={28}
                        color={minusDisabled ? '#919EAB3D' : theme.sw.colors.neutral[800]}
                        name="minus-fill"
                    />
                </Pressable>
                <TextInput
                    showSoftInputOnFocus={false}
                    style={styles.input}
                    inputStyles={styles.inputText}
                    value={inputValue.toString()}
                    textType={'information'}
                />

                <Pressable disabled={addDisabled} onPress={onAdd} hitSlop={8}>
                    <Icon
                        size={28}
                        color={addDisabled ? '#919EAB3D' : theme.sw.colors.neutral[800]}
                        name="add-fill"
                    />
                </Pressable>
            </View>
        </View>
    );
};