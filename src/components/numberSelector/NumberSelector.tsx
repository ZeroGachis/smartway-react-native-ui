/* eslint-disable no-useless-escape */
import React, { useRef, useState } from 'react';
import { Keyboard, StyleSheet, View, ViewStyle } from 'react-native';
import { IconButton } from '../buttons/IconButton';
import { NumberField } from '../numberField/NumberField';
import type { IconName } from '../icons/IconProps';

export interface Props {
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
    decimal?: boolean;
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
    variant = 'outlined',
    decimal = false,
    size = 'm',
}: Props) => {
    const refInput = useRef<any>();
    const parser = decimal ? parseFloat : parseInt;
    const [tempValue, setTempValue] = useState<string>(value.toString());
    const [softInputOnFocus, setSoftInputOnFocus] = useState(false);
    const allowedMinus = (): boolean => {
        return minValue !== undefined && minValue < 0;
    };
    const decimalRegex = allowedMinus() ? /^-?\d+[\.]?\d?$/ : /^\d+[\.]?\d?$/;
    const integerRegex = allowedMinus() ? /^-?\d+$/ : /^\d+$/;
    const numberRegex = decimal ? decimalRegex : integerRegex;
    const onAdd = () => {
        Keyboard.dismiss();
        if (!addDisabled) {
            onChangeText(
                (
                    Math.round(
                        (value + 1 < maxValue ? value + 1 : maxValue) * 10
                    ) / 10
                ).toString()
            );
        }
    };
    const onMinus = () => {
        Keyboard.dismiss();
        if (!minusDisabled)
            onChangeText(
                (
                    Math.round(
                        (value - 1 > minValue ? value - 1 : minValue) * 10
                    ) / 10
                ).toString()
            );
    };
    const onChangeText = (text: string) => {
        if (tempValue !== '' && tempValue != '-') refInput?.current?.focus();
        if (text == '' || (allowedMinus() && text == '-')) {
            setTempValue(text);
        } else if (numberRegex.test(text)) {
            const parsedValue = parser(text);
            if (
                parsedValue !== undefined &&
                (minValue === undefined || parsedValue >= minValue) &&
                (maxValue === undefined || parsedValue <= maxValue)
            ) {
                onValueChange(parsedValue);
                setTempValue(parsedValue.toString());
            }
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
            marginHorizontal: 8,
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
                ref={refInput}
                style={styles.inputContainer}
                showSoftInputOnFocus={softInputOnFocus}
                onPressIn={() => setSoftInputOnFocus(true)}
                onPressOut={() => setSoftInputOnFocus(false)}
                keyboardType='number-pad'
                value={getDisplayedValue()}
                minValue={minValue}
                maxValue={maxValue}
                onChangeText={onChangeText}
                selectTextOnFocus={showSoftInputOnFocus}
                decimal={decimal}
                size={size}
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
