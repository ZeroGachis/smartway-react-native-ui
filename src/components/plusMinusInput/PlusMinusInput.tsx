import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { IconButton } from '../buttons/IconButton';
import { QuantityField } from '../quantityField/QuantityField';

interface Props {
    value: number;
    onValueChange: (value: number) => void;
    minValue: number;
    maxValue: number;
    style?: ViewStyle;
    minusIcon?: string;
    plusIcon?: string;
    showSoftInputOnFocus?: boolean;
    variant?: 'filled' | 'outlined';
}

export const PlusMinusInput = ({
    value,
    onValueChange,
    minValue = 0,
    maxValue,
    style,
    minusIcon = 'minus',
    plusIcon = 'plus',
    showSoftInputOnFocus = false,
    variant = 'filled',
}: Props) => {
    const [tempValue, setTempValue] = useState<string>('0');
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
                disabled={minusDisabled}
            />
            <QuantityField
                style={styles.inputContainer}
                showSoftInputOnFocus={showSoftInputOnFocus}
                keyboardType="number-pad"
                value={getDisplayedValue()}
                onChangeText={onChangeText}
                selectTextOnFocus={showSoftInputOnFocus}
            />
            <IconButton variant={variant} icon={plusIcon} onPress={onAdd} disabled={addDisabled} />
        </View>
    );
};
