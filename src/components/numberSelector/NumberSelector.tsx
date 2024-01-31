import React, { useRef, useState } from 'react';
import { Keyboard, StyleSheet, View, ViewStyle } from 'react-native';
import { IconButton } from '../buttons/IconButton';
import { FieldState, NumberField } from '../numberField/NumberField';
import type { IconName } from '../icons/IconProps';
import { NumberValidator } from '../numberField/NumberValidator';

export interface Props {
    validator: NumberValidator;
    initialValue: number | undefined;
    value: number | undefined;
    onEndEditing: (value: string | undefined) => void;
    onKeyPress?: (
        oldValue: string | undefined,
        newValue: string | undefined,
    ) => void;
    style?: ViewStyle;
    minusIcon?: IconName;
    plusIcon?: IconName;
    showSoftInputOnFocus?: boolean;
    variant?: 'filled' | 'outlined';
    size?: 'm' | 's';
    placeholder?: string;
    incrementStep?: number;
    decrementStep?: number;
}

export const RoundValue = (val: number): number => {
    return Math.round(val * 10) / 10;
};

export const ComputeCrementedValue = (
    value: number,
    step: number,
    validator: NumberValidator,
): number => {
    let crementedValue = value;
    const roundedCrementedValue = Math.round(crementedValue);
    if (crementedValue === 0 || crementedValue % roundedCrementedValue === 0) {
        crementedValue = Number(value ?? 0) + step;
    } else if (step < 0) {
        crementedValue = Math.floor(value) + step + 1;
    } else if (step > 0) {
        crementedValue = Math.ceil(value) + step - 1;
    }
    return Math.max(
        Math.min(crementedValue, validator.maxValue),
        validator.minValue,
    );
};

export const NumberSelector = ({
    validator,
    initialValue,
    value,
    onEndEditing,
    onKeyPress,
    style,
    minusIcon = 'minus',
    plusIcon = 'add',
    showSoftInputOnFocus = false,
    variant = 'outlined',
    size = 'm',
    placeholder = '--',
    incrementStep = 1,
    decrementStep = 1,
}: Props) => {
    const [tempValue, setTempValue] = useState<string>(
        value?.toString() ?? placeholder,
    );

    const [lastValidValue, setLastValidValue] = useState<number | undefined>();
    const [softInputOnFocus, setSoftInputOnFocus] = useState(false);

    const [error, setError] = useState(false);
    const [focused, setFocused] = useState(false);
    const [fieldState, setFieldState] = useState<FieldState>(
        value !== initialValue ? 'filled' : 'filledWithDefault',
    );

    const computeIncrementedValue = (): number => {
        return RoundValue(
            ComputeCrementedValue(getParsedValue(), incrementStep, validator),
        );
    };

    const computeDecrementedValue = (): number => {
        return RoundValue(
            ComputeCrementedValue(getParsedValue(), -decrementStep, validator),
        );
    };

    const isConsideredEmptyValue = (value: string) => {
        return value === '' || value === '-' || value === placeholder;
    };

    const getParsedValue = (): number => {
        const parsedValue = validator.parser(tempValue);
        return Number.isNaN(parsedValue) ? 0 : parsedValue;
    };

    const getValidValue = (): string => {
        if (isConsideredEmptyValue(tempValue)) {
            return lastValidValue?.toString() ?? placeholder;
        }
        return getParsedValue().toString();
    };

    const refInput = useRef<any>();
    const minusDisabled = validator.minValue === getParsedValue();
    const addDisabled = validator.maxValue === getParsedValue();

    const onAdd = () => {
        Keyboard.dismiss();
        if (addDisabled) return;
        const newValue = computeIncrementedValue().toString();
        onChangeText(newValue);
        onEndEditing !== undefined && onEndEditing(newValue);
    };

    const onMinus = () => {
        Keyboard.dismiss();
        if (minusDisabled) return;
        const newValue = computeDecrementedValue().toString();
        onChangeText(newValue);
        onEndEditing !== undefined && onEndEditing(newValue);
    };

    const onChangeText = (text: string) => {
        refInput.current.focus();
        setFieldState(
            text !== initialValue?.toString() ? 'filled' : 'filledWithDefault',
        );
        if (validator.validateFormat(text)) {
            if (Keyboard.isVisible() && onKeyPress) {
                onKeyPress(tempValue, text);
            }
            setTempValue(text);
            setLastValidValue(getParsedValue());
            setError(!validator.validateMinMax(text));
        }
    };

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            ...style,
        },
        inputContainer: {
            marginHorizontal: 8,
            flex: 1,
        },
    });
    const getDisplayedValue = (): string => {
        return tempValue.toString();
    };
    const onFocus = () => {
        setFocused(true);
    };
    const onBlur = () => {
        setTempValue(getValidValue());
        setFocused(false);
    };

    return (
        <View style={styles.container}>
            <IconButton
                variant={variant}
                icon={minusIcon}
                onPress={onMinus}
                size={size}
                disabled={minusDisabled}
                testID='number_selector_minus_button'
            />

            <NumberField
                ref={refInput}
                style={styles.inputContainer}
                showSoftInputOnFocus={softInputOnFocus}
                onPressIn={() => setSoftInputOnFocus(true)}
                onPressOut={() => setSoftInputOnFocus(false)}
                selectTextOnFocus={showSoftInputOnFocus}
                keyboardType='number-pad'
                value={getDisplayedValue()}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                onEndEditing={(e) => {
                    onEndEditing(e.nativeEvent.text);
                }}
                size={size}
                error={error}
                fieldState={fieldState}
                focused={focused}
            />
            <IconButton
                variant={variant}
                icon={plusIcon}
                onPress={onAdd}
                disabled={addDisabled}
                size={size}
                testID='number_selector_plus_button'
            />
        </View>
    );
};
