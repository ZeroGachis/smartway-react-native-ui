import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import type { IconName } from '../icons/IconProps';
import { TextInput } from '../inputs/TextInput';
import { IconButton } from '../buttons/IconButton';

interface Props {
    value: number;
    onValueChange: (value: number) => void;
    minValue: number;
    maxValue: number;
    style?: ViewStyle;
    minusIcon?: IconName;
    plusIcon?: IconName;
    showSoftInputOnFocus?: boolean;
    mode?: 'filled' | 'outlined' | 'inline';
}

export const PlusMinusInput = ({
    onValueChange,
    value,
    style,
    minValue = 0,
    maxValue,
    minusIcon = 'minus-fill',
    plusIcon = 'add-fill',
    mode = 'inline',
    showSoftInputOnFocus = false,
}: Props) => {
    const theme = useTheme();

    const onAdd = () => {
        if (!addDisabled) onValueChange(value + 1);
    };
    const onMinus = () => {
        if (!minusDisabled) onValueChange(value - 1);
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
            marginHorizontal: theme.sw.spacing.l,
        },
        inputText: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    });
    return (
        <View style={styles.inputContainer}>
            <IconButton
                mode={mode}
                name={minusIcon}
                onClick={onMinus}
                disabled={minusDisabled}
            ></IconButton>
            <TextInput
                showSoftInputOnFocus={showSoftInputOnFocus}
                style={styles.input}
                inputStyles={styles.inputText}
                value={value.toString()}
                textType={'information'}
            />
            <IconButton
                mode={mode}
                name={plusIcon}
                onClick={onAdd}
                disabled={addDisabled}
            ></IconButton>
        </View>
    );
};
