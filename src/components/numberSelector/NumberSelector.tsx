import React, { useRef, useState } from 'react';
import { Keyboard, StyleSheet, View, ViewStyle } from 'react-native';
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
    variant = 'outlined',
    size = 'm',
}: Props) => {
    let refInput = useRef<any>();

    const [tempValue, setTempValue] = useState<string>(value.toString());
    const [softInputOnFocus, setSoftInputOnFocus] = useState(false);
    const onAdd = () => {
        Keyboard.dismiss();
        if (!addDisabled) onChangeText((value + 1).toString());
    };
    const onMinus = () => {
        Keyboard.dismiss();
        if (!minusDisabled) onChangeText((value - 1).toString());
    };
    const onChangeText = (text: string) => {
        const cleanNumber = text.replace(/[^0-9]/g, '');
        if (tempValue !== '') refInput?.current?.focus();
        if (cleanNumber !== '') {
            const parsedValue = parseInt(cleanNumber);
            if (parsedValue !== undefined && parsedValue >= minValue && parsedValue <= maxValue) {
                onValueChange(parsedValue);
                setTempValue(parsedValue.toString());
            }
        } else {
            onValueChange(0);
            setTempValue('');
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
                ref={refInput}
                style={styles.inputContainer}
                showSoftInputOnFocus={softInputOnFocus}
                onPressIn={() => setSoftInputOnFocus(true)}
                onPressOut={() => setSoftInputOnFocus(false)}
                keyboardType="number-pad"
                value={getDisplayedValue()}
                minValue={minValue}
                maxValue={maxValue}
                onChangeText={onChangeText}
                selectTextOnFocus={showSoftInputOnFocus}
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
