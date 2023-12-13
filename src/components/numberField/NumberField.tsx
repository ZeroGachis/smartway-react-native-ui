/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TextInputBase } from 'react-native';
import { Theme, useTheme } from '../../styles/themes';

type FieldBaseProps = React.ComponentProps<typeof TextInputBase>;

function getStyle(
    theme: Theme,
    currentState: State,
    size: Size,
    decimal: boolean,
) {
    const { backgroundColor, borderColor, textColor } = GetColorsStyle(
        theme,
        currentState,
    );

    const { borderRadius, fontSize, height, lineHeight, width } = GetSizesStyle(
        size,
        decimal,
    );

    const style = StyleSheet.create({
        main: {
            borderRadius: borderRadius,
            height: height,
            borderWidth: borderColor !== undefined ? 1 : 0,
            borderColor: borderColor,
            width: width,
            color: textColor,
            fontStyle: 'normal',
            fontFamily: 'PublicSans-Regular',
            fontSize: fontSize,
            lineHeight: lineHeight,
            backgroundColor: backgroundColor,
            paddingVertical: 0,
            marginVertical: 0,
        },
    });
    return style.main;
}

function GetColorsStyle(theme: Theme, currentState: State) {
    let backgroundColor, borderColor, textColor;

    switch (currentState) {
        case 'prefilled':
            textColor = theme.sw.colors.neutral[500];
            backgroundColor =
                theme.sw.colors.neutral[500] + theme.sw.transparency[8];
            break;
        case 'filled-focused':
            textColor = theme.sw.colors.neutral[800];
            backgroundColor = theme.sw.colors.neutral[50];
            borderColor = theme.sw.colors.primary.main;
            break;
        case 'prefilled-focused':
            textColor = theme.sw.colors.primary.main;
            borderColor = theme.sw.colors.primary.main;
            backgroundColor =
                theme.sw.colors.primary.main + theme.sw.transparency[16];
            break;
        case 'filled':
            textColor = theme.sw.colors.neutral[800];
            backgroundColor =
                theme.sw.colors.neutral[500] + theme.sw.transparency[8];
            break;
        case 'error':
            textColor = theme.sw.colors.error.main;
            backgroundColor =
                theme.sw.colors.error.main + theme.sw.transparency[8];
            break;
        case undefined:
            break;
    }
    return { backgroundColor, borderColor, textColor };
}

function GetSizesStyle(size: Size, decimal: boolean) {
    let borderRadius, fontSize, height, lineHeight, width;
    if (size === 's') {
        borderRadius = 10;
        fontSize = 18;
        height = lineHeight = 38;
        width = decimal ? 63 : 43;
    }

    if (size === 'm' || size === 'l') {
        borderRadius = 18;
        height = lineHeight = 50;
        width = decimal ? 110 : 72;
    }

    if (size === 'm') {
        fontSize = 20;
    }

    if (size === 'l') {
        fontSize = 32;
    }
    return { borderRadius, fontSize, height, lineHeight, width };
}

type State =
    | 'readonly'
    | 'filled'
    | 'prefilled'
    | 'filled-focused'
    | 'prefilled-focused'
    | 'error';

type Size = 's' | 'm' | 'l';

export interface NumberFieldProps extends FieldBaseProps {
    state?: State;
    size?: Size;
    minValue?: number;
    maxValue?: number;
    decimal?: boolean;
}

export const NumberField = React.forwardRef<TextInput, NumberFieldProps>(
    (
        {
            state = 'prefilled',
            size = 'm',
            minValue = 0,
            maxValue = 999,
            decimal = false,
            ...props
        }: NumberFieldProps,
        ref,
    ) => {
        const decimalRegex =
            minValue !== undefined && minValue < 0
                ? /^-?\d+[\.]?\d?$/
                : /^\d+[\.]?\d?$/;
        const integerRegex =
            minValue !== undefined && minValue < 0 ? /^-?\d+$/ : /^\d+$/;
        const numberRegex = decimal ? decimalRegex : integerRegex;
        const [currentState, setCurrentState] = useState<State>(state);
        const [filled, setFilled] = useState<boolean>(false);
        const [error, setError] = useState<boolean>(false);
        const [focused, setFocused] = useState<boolean>(false);
        const [forcedState, setForcedState] = useState<boolean>(true);
        const [firstContentChange, setFirstContentChange] =
            useState<boolean>(true);
        const [firstValue, setFirstValue] = useState<string>();
        const [value, setValue] = useState<string>(props.value ?? '');
        const [lastValue, setLastValue] = useState<string>();
        const parser = decimal ? parseFloat : parseInt;

        const theme = useTheme();
        const style = getStyle(theme, currentState, size, decimal);

        useEffect(() => {
            if (forcedState) {
                setForcedState(false);
                return;
            }
            refreshCurrentState();
        }, [error, filled, focused]);

        useEffect(() => {
            if (firstContentChange) {
                setFirstValue(props.value);
                setFirstContentChange(false);
                return;
            }
            setFilled(props.value !== firstValue);
            if (numberRegex.test(props.value ?? '')) setLastValue(value);
            checkContent(props.value);
        }, [props.value]);

        useEffect(() => {
            if (firstContentChange) {
                setFirstValue(value);
                setFirstContentChange(false);
                return;
            }
            setFilled(value !== firstValue);
            if (numberRegex.test(props.value ?? '')) {
                setLastValue(value);
            }
            checkContent(value);
        }, [value]);

        const refreshCurrentState = () => {
            if (currentState === 'readonly') return;
            else if (error) setCurrentState('error');
            else if (filled) {
                if (focused) setCurrentState('filled-focused');
                else setCurrentState('filled');
            } else {
                if (focused) setCurrentState('prefilled-focused');
                else setCurrentState('prefilled');
            }
        };

        const checkContent = (text: string | undefined) => {
            if (
                text !== undefined &&
                text !== '' &&
                ((minValue !== undefined && minValue < 0 && text !== '-') ||
                    minValue === undefined ||
                    (minValue !== undefined && minValue >= 0))
            ) {
                const parsedValue = parser(text);
                if (!Number.isNaN(parsedValue)) {
                    setError(
                        (minValue !== undefined && parsedValue < minValue) ||
                            (maxValue !== undefined && parsedValue >= maxValue),
                    );
                }
            }
        };
        const onChangeText = (e: any) => {
            if (props?.onChangeText !== undefined) {
                props.onChangeText(e);
                checkContent(props.value);
            } else {
                if (e == '' || (allowedMinus() && e == '-')) setValue(e);
                else if (numberRegex.test(e)) setValue(e);
                checkContent(value);
            }
        };
        const onFocus = (e: any) => {
            setFocused(true);
            if (props?.onFocus !== undefined) props.onFocus(e);
        };
        const allowedMinus = (): boolean => {
            return minValue !== undefined && minValue < 0;
        };
        const onBlur = (e: any) => {
            setFocused(false);
            if (
                value === '' ||
                props.value === '' ||
                (allowedMinus() && (value === '-' || props.value === '-'))
            ) {
                if (firstValue !== '') onChangeText(firstValue);
                else if (lastValue !== '') onChangeText(lastValue);
            }
            if (props?.onBlur !== undefined) props.onBlur(e);
        };

        return (
            <TextInput
                {...props}
                value={props.onChangeText ? props.value : value}
                ref={ref ?? undefined}
                style={[style, props.style]}
                onChangeText={(e) => onChangeText(e)}
                onBlur={(e) => onBlur(e)}
                onFocus={(e) => onFocus(e)}
                selectionColor={
                    theme.sw.colors.primary.main + theme.sw.transparency[16]
                }
                cursorColor={theme.sw.colors.primary.main}
                keyboardType='number-pad'
                editable={state !== 'readonly'}
                textAlign={'center'}
            />
        );
    },
);

NumberField.displayName = 'NumberField';
