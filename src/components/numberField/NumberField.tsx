import React, { createRef, useEffect, useImperativeHandle, useState } from 'react';
import { StyleSheet, TextInput, TextInputBase, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { CardPage } from 'example/src/Card/CardPage';

type FieldBaseProps = React.ComponentProps<typeof TextInputBase>;
interface NumberFieldProps extends FieldBaseProps {
    state?: 'readonly' | 'filled' | 'prefilled' | 'filled-focused' | 'prefilled-focused' | 'error';
    size?: 'm' | 's';
    minValue?: number;
    maxValue?: number;
}

export const NumberField = React.forwardRef<TextInput, NumberFieldProps>(
    ({ state = 'prefilled', size = 'm', ...props }: NumberFieldProps, ref) => {
        const theme = useTheme();

        const [currentState, setCurrentState] = useState<string>(state);
        const [filled, setFilled] = useState<boolean>(false);
        const [error, setError] = useState<boolean>(false);
        const [focused, setFocused] = useState<boolean>(false);
        const [forcedState, setForcedState] = useState<boolean>(true);
        const [firstContentChange, setFirstContentChange] = useState<boolean>(true);
        const [firstValue, setFirstValue] = useState<string>();

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
            checkContent(props.value);
        }, [props.value]);

        const [lastValue, setLastValue] = useState<string>();

        const stateStyle = () => {
            let borderColor = undefined;
            let textColor = undefined;
            let backgroundColor = undefined;
            switch (currentState) {
                case 'prefilled':
                    textColor = theme.sw.colors.neutral[500];
                    backgroundColor = theme.sw.colors.neutral[500] + theme.sw.transparency[8];
                    break;
                case 'filled-focused':
                    textColor = theme.sw.colors.neutral[800];
                    borderColor = theme.sw.colors.primary.main;
                    break;
                case 'prefilled-focused':
                    textColor = theme.sw.colors.primary.main;
                    borderColor = theme.sw.colors.primary.main;
                    backgroundColor = theme.sw.colors.primary.main + theme.sw.transparency[16];
                    break;
                case 'filled':
                    textColor = theme.sw.colors.neutral[800];
                    backgroundColor = theme.sw.colors.neutral[500] + theme.sw.transparency[8];
                    break;
                case 'error':
                    textColor = theme.sw.colors.error.main;
                    backgroundColor = theme.sw.colors.error.main + theme.sw.transparency[8];
                    break;
                case undefined:
                    break;
            }

            const style = StyleSheet.create({
                input: {
                    borderRadius: size === 's' ? 10 : 18,
                    height: size === 's' ? 38 : 48,
                    borderWidth: borderColor ? 1 : 0,
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
                        (props.minValue !== undefined && parsedValue < props.minValue) ||
                            (props.maxValue !== undefined && parsedValue > props.maxValue),
                    );
                }
            }
        };
        let cleanContent = (text: string | undefined) => {
            if (text !== undefined && text !== '') {
                const cleanNumber = text.replace(/[^0-9]/g, '');
                const parsedValue = parseInt(cleanNumber);
                console.log('>>>', parsedValue.toString());
                return parsedValue.toString();
            }
            return '';
        };
        let onChangeText = (e: any) => {
            if (props?.onChangeText !== undefined) {
                props.onChangeText(e);
            }
            checkContent(props.value);
            if (props.value !== '') setLastValue(props.value);
            props.value = e;
        };
        let onFocus = (e: any) => {
            setFocused(true);
            if (props?.onFocus !== undefined) props.onFocus(e);
        };
        let onBlur = (e: any) => {
            setFocused(false);
            if (props.value === '' && firstValue !== undefined) onChangeText(firstValue);
            else if (props.value === '' && lastValue !== undefined) onChangeText(lastValue);
            if (props?.onBlur !== undefined) props.onBlur(e);
        };

        return (
            <TextInput
                {...props}
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
