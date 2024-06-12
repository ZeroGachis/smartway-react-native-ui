import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, StyleSheet, View, ViewStyle } from 'react-native';
import { IconButton } from '../buttons/IconButton';
import { FieldState, NumberField } from '../numberField/NumberField';
import type { IconName } from '../icons/IconProps';
import { NumberValidator } from '../numberField/NumberValidator';

type Source = 'keyboard' | 'minus_button' | 'plus_button';

export interface Props {
    validator: NumberValidator;
    initialValue: number | undefined;
    value: number | undefined;
    onEndEditing: (value: string | undefined, source: Source) => void;
    style?: ViewStyle;
    minusIcon?: IconName;
    plusIcon?: IconName;
    showSoftInputOnFocus?: boolean;
    selectTextOnFocus?: boolean;
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
    style,
    minusIcon = 'minus',
    plusIcon = 'add',
    showSoftInputOnFocus = false,
    selectTextOnFocus = false,
    variant = 'outlined',
    size = 'm',
    placeholder = '--',
    incrementStep = 1,
    decrementStep = 1,
}: Props) => {
    const [tempValue, setTempValue] = useState<string>('');
    const [editingEnded, setEditingEnded] = useState<boolean>(false);
    const [editingSource, setEditingSource] = useState<Source | undefined>(
        undefined,
    );

    const [lastValidValue, setLastValidValue] = useState<number | undefined>();
    const [softInputOnFocus, setSoftInputOnFocus] =
        useState(showSoftInputOnFocus);
    const [afterFirstFocus, setAfterFirstFocus] = useState(false);
    const [error, setError] = useState(false);
    const [focused, setFocused] = useState(false);
    const [selection, setSelection] = useState<
        { start: number; end?: number } | undefined
    >({
        start: 0,
        end: 0,
    });
    const [fieldState, setFieldState] = useState<FieldState>(
        value !== initialValue ? 'filled' : 'filledWithDefault',
    );

    useEffect(() => {
        if (selection !== undefined) setSelection(undefined);
    }, [selection]);

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

    const refInput = useRef<any>(null);
    const minusDisabled = validator.minValue === getParsedValue();
    const addDisabled = validator.maxValue === getParsedValue();

    const onAdd = () => {
        Keyboard.dismiss();
        if (addDisabled) return;
        const newValue = computeIncrementedValue().toString();
        onChangeText(newValue);
        setEditingSource('plus_button');
    };

    const onMinus = () => {
        Keyboard.dismiss();
        if (minusDisabled) return;
        const newValue = computeDecrementedValue().toString();
        onChangeText(newValue);
        setEditingSource('minus_button');
    };

    const onChangeText = (text: string) => {
        refInput.current.focus();
        if (validator.validateFormat(text)) {
            setTempValue(text);
            setLastValidValue(getParsedValue());
            setError(!validator.validateMinMax(text));
        }
        setEditingSource('keyboard');
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
    const onFocus = () => {
        setAfterFirstFocus(true);
        setFocused(true);
        clearPlaceHolder();
        if (isInitialValue()) {
            selectAll();
        } else {
            resetCursorToEnd();
        }
    };

    const onBlur = () => {
        setTempValue(getValidValue());
        setFocused(false);
        resetCursorToBeginning();
    };
    const clearPlaceHolder = () => {
        if (tempValue === placeholder) setTempValue('');
    };
    const resetCursorToEnd = () => {
        const length = value?.toString().length ?? 0;
        if (length >= 0) {
            setSelection({ start: length });
        }
    };
    const resetCursorToBeginning = () => {
        setSelection({ start: 0 });
    };
    const selectAll = () => {
        setSelection({ start: 0, end: value?.toString().length });
    };

    const isInitialValue = () => {
        return tempValue === initialValue?.toString();
    };

    useEffect(() => {
        setTempValue(value?.toString() ?? placeholder);
    }, [value, placeholder]);

    useEffect(() => {
        setFieldState(isInitialValue() ? 'filledWithDefault' : 'filled');
    }, [tempValue, initialValue]);

    useEffect(() => {
        if (editingEnded && editingSource !== undefined) {
            onEndEditing(tempValue, editingSource);
            setEditingSource(undefined);
            setEditingEnded(false);
        }
    }, [tempValue, onEndEditing, editingEnded, editingSource]);

    useEffect(() => {
        if (afterFirstFocus && selection !== undefined) setSelection(undefined);
    }, [afterFirstFocus, selection]);

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
                selectTextOnFocus={selectTextOnFocus}
                keyboardType='number-pad'
                value={tempValue}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                onEndEditing={() => {
                    setEditingEnded(true);
                }}
                selection={selection}
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
