import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { IconButton } from '../buttons/IconButton';
import { NumberField } from '../numberField/NumberField';
import type { IconName } from '../icons/IconProps';

interface Props {
    value: number;
    onValueChange: (value: number) => void;
    minValue: number;
    maxValue: number;
    style?: ViewStyle;
    minusIcon?: IconName;
    plusIcon?: IconName;
    showSoftInputOnFocus?: boolean;
    variant?: 'filled' | 'outlined';
    size?: 'm' | 's';
}

export const NumberSelector = ({
    value,
    onValueChange,
    minValue = 0,
    maxValue,
    style,
    minusIcon = 'minus',
    plusIcon = 'add',
    showSoftInputOnFocus = false,
    variant = 'filled',
    size = 'm',
}: Props) => {
    const [tempValue, setTempValue] = useState<string>(value.toString());
    const onAdd = () => {
        if (!addDisabled) {
            onValueChange(value + 1);
            setTempValue((value + 1).toString());
        }
    };
    const onMinus = () => {
        if (!minusDisabled) {
            onValueChange(value - 1);
            setTempValue((value - 1).toString());
        }
    };
    const onChangeText = (text: string) => {
        if (text !== '') {
            const parsedValue = parseInt(text);
            if (parsedValue && parsedValue >= minValue && parsedValue <= maxValue) {
                onValueChange(parsedValue);
                setTempValue(text);
            }
        } else {
            setTempValue('');
            onValueChange(0);
        }
    };

    const minusDisabled = minValue >= value;
    const addDisabled = maxValue <= value;

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            ...style,
        },
        inputContainer: {
            marginHorizontal: 5,
            flex: 0,
        },
    });
    const getDisplayedValue = (): string => {
        return tempValue.toString();
    };
    return (
        <View style={styles.container}>
            <IconButton
                variant={variant}
                icon={minusIcon}
                onPress={onMinus}
                size={size}
                disabled={minusDisabled}
            />
            <NumberField
                style={styles.inputContainer}
                showSoftInputOnFocus={showSoftInputOnFocus}
                keyboardType="number-pad"
                value={getDisplayedValue()}
                onChangeText={onChangeText}
                selectTextOnFocus={showSoftInputOnFocus}
                size={size}
                state={'prefilled'}
            />
            <IconButton
                variant={variant}
                icon={plusIcon}
                onPress={onAdd}
                disabled={addDisabled}
                size={size}
            />
        </View>
    );
};
