import React from 'react';
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
    const theme = useTheme();

    const onAdd = () => {
        if (!addDisabled) onValueChange(value + 1);
    };
    const onMinus = () => {
        if (!minusDisabled) onValueChange(value - 1);
    };
    const onChangeText = (text: string) => {
        const parsedValue = parseInt(text);
        if (parsedValue && parsedValue >= minValue && parsedValue <= maxValue)
            onValueChange(parsedValue);
    };

    const minusDisabled = minValue >= value;
    const addDisabled = maxValue <= value;

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
        iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        inputContainer: {
            alignItems: 'center',
            flexDirection: 'row',
        },
    });
    return (
        <View style={styles.inputContainer}>
            <IconButton
                variant={variant}
                icon={minusIcon}
                onPress={onMinus}
                disabled={minusDisabled}
            />
            <QuantityField
                showSoftInputOnFocus={showSoftInputOnFocus}
                keyboardType="number-pad"
                value={value.toString()}
                onChangeText={onChangeText}
                selectTextOnFocus={showSoftInputOnFocus}
                mode="outlined"
            />
            <IconButton variant={variant} icon={plusIcon} onPress={onAdd} disabled={addDisabled} />
        </View>
    );
};
