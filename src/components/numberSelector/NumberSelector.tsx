/* eslint-disable no-useless-escape */
import React, { useRef, useState } from 'react';
import { Keyboard, StyleSheet, View, ViewStyle } from 'react-native';
import { IconButton } from '../buttons/IconButton';
import { NumberField } from '../numberField/NumberField';
import type { IconName } from '../icons/IconProps';

export interface Props {
    value: number | undefined;
    onValueChange?: (value: number) => void;
    onEndEditing?: ((value: string | undefined) => void) | undefined
    minValue: number;
    maxValue: number;
    style?: ViewStyle;
    minusIcon?: IconName;
    plusIcon?: IconName;
    showSoftInputOnFocus?: boolean;
    variant?: 'filled' | 'outlined';
    size?: 'm' | 's';
    decimal?: boolean;
    placeholder?: string;
}

export const NumberSelector = ({
    value,
    onValueChange= undefined,
    onEndEditing = undefined,
    minValue = 0,
    maxValue,
    style,
    minusIcon = 'minus',
    plusIcon = 'add',
    showSoftInputOnFocus = false,
    variant = 'outlined',
    decimal = false,
    size = 'm',
    placeholder = '--',
}: Props) => {
    const refInput = useRef<any>();
    const parser = decimal ? parseFloat : parseInt;
    const [tempValue, setTempValue] = useState<string>(value?.toString() ?? placeholder);
    const [softInputOnFocus, setSoftInputOnFocus] = useState(false);
    const allowedMinus = (): boolean => {
        return minValue !== undefined && minValue < 0;
    };
    const decimalRegex = allowedMinus() ? /^-?\d+[\.,]?\d?$/ : /^\d+[\.,]?\d?$/;
    const integerRegex = allowedMinus() ? /^-?\d+$/ : /^\d+$/;
    const numberRegex = decimal ? decimalRegex : integerRegex;
    const onAdd = () => {
        Keyboard.dismiss();
        if (!addDisabled) {
            const newValue =value?  (
                Math.round(
                    (value + 1 < maxValue ? value + 1 : maxValue) * 10
                ) / 10
            ).toString() : "1";
            onChangeText(newValue);
            onEndEditing && onEndEditing(newValue);
        }
    };
    const onMinus = () => {
        Keyboard.dismiss();
        if (!minusDisabled){
            const newValue = value ? (
                Math.round(
                    (value - 1 > minValue ? value - 1 : minValue) * 10
                ) / 10
            ).toString() : "0";
            onChangeText(newValue);
            onEndEditing && onEndEditing(newValue);
        }
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
                onValueChange && onValueChange(parsedValue);
                setTempValue(text);
            }
        }
    };

    const minusDisabled = minValue >= (value ?? 0) ;
    const addDisabled = maxValue <= (value ?? 0);

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
                onEndEditing={(e) => onEndEditing && onEndEditing(e.nativeEvent.text)}
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
