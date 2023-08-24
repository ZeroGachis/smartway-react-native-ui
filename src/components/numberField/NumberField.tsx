import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TextInputBase } from 'react-native';
import { useTheme } from '../../styles/themes';

type FieldBaseProps = React.ComponentProps<typeof TextInputBase>;
interface NumberFieldProps extends FieldBaseProps {
    state?: 'readonly' | 'filled' | 'prefilled' | 'filled-focused' | 'prefilled-focused' | 'error';
    size?: 'm' | 's';
    minValue?: number;
    maxValue?: number;
}

export const NumberField = React.forwardRef<TextInput, NumberFieldProps>(
    (
        {
            state = 'prefilled',
            size = 'm',
            minValue = 0,
            maxValue = 999,
            ...props
        }: NumberFieldProps,
        ref,
    ) => {
        const theme = useTheme();

        const [currentState, setCurrentState] = useState<string>(state);
        const [filled, setFilled] = useState<boolean>(false);
        const [error, setError] = useState<boolean>(false);
        const [focused, setFocused] = useState<boolean>(false);
        const [forcedState, setForcedState] = useState<boolean>(true);
        const [firstContentChange, setFirstContentChange] = useState<boolean>(true);
        const [firstValue, setFirstValue] = useState<string>();
        const [value, setValue] = useState<string>(props.value ?? '');
        const [lastValue, setLastValue] = useState<string>();

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
            if (cleanContent(props.value) !== '') setLastValue(value);
            checkContent(props.value);
        }, [props.value]);

        useEffect(() => {
            if (firstContentChange) {
                setFirstValue(value);
                setFirstContentChange(false);
                return;
            }
            setFilled(value !== firstValue);
            if (cleanContent(value) !== '') {
                setLastValue(value);
            }
            checkContent(value);
        }, [value]);

        const stateStyle = () => {
            let borderColor = undefined;
            let textColor = undefined;
            let backgroundColor = undefined;
            switch (currentState) {
                case 'prefilled':
                    textColor = theme.sw.colors.neutral[500];
                    borderColor = undefined;
                    backgroundColor = theme.sw.colors.neutral[500] + theme.sw.transparency[8];
                    break;
                case 'filled-focused':
                    textColor = theme.sw.colors.neutral[800];
                    backgroundColor = theme.sw.colors.neutral[50];
                    borderColor = theme.sw.colors.primary.main;
                    break;
                case 'prefilled-focused':
                    textColor = theme.sw.colors.primary.main;
                    borderColor = theme.sw.colors.primary.main;
                    backgroundColor = theme.sw.colors.primary.main + theme.sw.transparency[16];
                    break;
                case 'filled':
                    textColor = theme.sw.colors.neutral[800];
                    borderColor = undefined;
                    backgroundColor = theme.sw.colors.neutral[500] + theme.sw.transparency[8];
                    break;
                case 'error':
                    textColor = theme.sw.colors.error.main;
                    borderColor = undefined;
                    backgroundColor = theme.sw.colors.error.main + theme.sw.transparency[8];
                    break;
                case undefined:
                    break;
            }

            const style = StyleSheet.create({
                input: {
                    borderRadius: size === 's' ? 10 : 18,
                    height: size === 's' ? 38 : 48,
                    borderWidth: borderColor !== undefined ? 1 : 0,
                    borderColor: borderColor,

                    width: size === 's' ? 43 : 72,

                    color: textColor,
                    fontStyle: 'normal',
                    fontFamily: 'PublicSans-Regular',
                    fontSize: size === 's' ? 18 : 32,
                    lineHeight: size === 's' ? 38 : 48,
                    backgroundColor: backgroundColor,
                    paddingVertical: 0,
                    marginVertical: 0,
                },
            });
            return style.input;
        };

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
        let checkContent = (text: string | undefined) => {
            if (text !== undefined && text !== '') {
                const cleanNumber = text.replace(/[^0-9]/g, '');
                const parsedValue = parseInt(cleanNumber);
                if (parsedValue !== undefined) {
                    setError(
                        (minValue !== undefined && parsedValue < minValue) ||
                            (maxValue !== undefined && parsedValue > maxValue),
                    );
                }
            }
        };
        let cleanContent = (text: string | undefined) => {
            if (text !== undefined && text !== '') {
                const cleanNumber = text.replace(/[^0-9]/g, '');
                const parsedValue = parseInt(cleanNumber);
                return parsedValue.toString();
            }
            return '';
        };
        let onChangeText = (e: any) => {
            if (props?.onChangeText !== undefined) {
                props.onChangeText(e);
                checkContent(props.value);
            } else {
                if (e == '') setValue('');
                else if (cleanContent(e) != '') setValue(cleanContent(e));
                checkContent(value);
            }
        };
        let onFocus = (e: any) => {
            setFocused(true);
            if (props?.onFocus !== undefined) props.onFocus(e);
        };
        let onBlur = (e: any) => {
            setFocused(false);
            if ((value === '' || props.value === '') && firstValue !== '') onChangeText(firstValue);
            else if ((value === '' || props.value === '') && lastValue !== '') {
                onChangeText(lastValue);
            }
            if (props?.onBlur !== undefined) props.onBlur(e);
        };

        return (
            <TextInput
                {...props}
                value={props.onChangeText ? props.value : value}
                ref={ref ?? undefined}
                style={[stateStyle(), props.style]}
                selectTextOnFocus={false}
                onChangeText={(e) => onChangeText(e)}
                onBlur={(e) => onBlur(e)}
                onFocus={(e) => onFocus(e)}
                selectionColor={theme.sw.colors.primary.main + theme.sw.transparency[16]}
                cursorColor={theme.sw.colors.primary.main}
                keyboardType="number-pad"
                editable={state !== 'readonly'}
                textAlign={'center'}
            />
        );
    },
);
