import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { TextInput } from '../inputs/TextInput';
import { IconButton } from '../buttons/IconButton';

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
    onValueChange,
    value,
    style,
    minValue = 0,
    maxValue,
    minusIcon = 'minus-fill',
    plusIcon = 'add-fill',
    variant = 'filled',
    showSoftInputOnFocus = false,
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
            marginHorizontal: theme.sw.spacing.xs,
        },
        inputText: {
            textAlign: 'center',
            justifyContent: 'center',
            height: 38,
            width: 46,
        },
    });
    return (
        <View style={styles.inputContainer}>
            <IconButton
                variant={variant}
                icon={minusIcon}
                onPress={onMinus}
                disabled={minusDisabled}
            ></IconButton>
            <TextInput
                showSoftInputOnFocus={showSoftInputOnFocus}
                keyboardType="number-pad"
                style={styles.input}
                inputStyles={styles.inputText}
                value={value.toString()}
                onChangeText={onChangeText}
                selectTextOnFocus={showSoftInputOnFocus}
                textType={'information'}
            />
            <IconButton
                variant={variant}
                icon={plusIcon}
                onPress={onAdd}
                disabled={addDisabled}
            ></IconButton>
        </View>
    );
};
