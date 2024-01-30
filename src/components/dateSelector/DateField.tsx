import React, { forwardRef, useState } from 'react';
import {
    NativeSyntheticEvent,
    StyleSheet,
    TextInputFocusEventData,
    TextInputProps,
} from 'react-native';
import { TextInput } from 'react-native';
import { Theme, useTheme } from '../../styles/themes';

export interface DateFieldProps extends TextInputProps {
    hasError?: boolean;
}

export const DateField = forwardRef<TextInput, DateFieldProps>(
    ({ value = '', hasError, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);

        const { style, theme } = useDateFieldStyle(hasError, isFocused, value);

        const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsFocused(true);
            if (props.onFocus) {
                props.onFocus(e);
            }
        };

        const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsFocused(false);
            if (props.onBlur) {
                props.onBlur(e);
            }
        };

        const onChangeText = (text: string) => {
            if (props.onChangeText) {
                props.onChangeText(removeNonNumeric(text));
            }
        };

        return (
            <TextInput
                ref={ref}
                maxLength={2}
                {...props}
                style={style.main}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                keyboardType='numeric'
                cursorColor={theme.sw.colors.primary.main}
                selectionColor={
                    theme.sw.colors.primary.main + theme.sw.transparency[16]
                }
                selectTextOnFocus={true}
                textAlign='center'
                placeholderTextColor={style.placeholder.color}
                onChangeText={onChangeText}
            />
        );
    },
);

DateField.displayName = 'DateFieldRef';

function useDateFieldStyle(
    hasError: boolean | undefined,
    isFocused: boolean,
    value: string,
) {
    type State =
        | 'readonly'
        | 'filled'
        | 'empty'
        | 'filled-focused'
        | 'empty-focused'
        | 'error';

    const theme = useTheme();

    function getState(
        hasError: boolean | undefined,
        isFocused: boolean,
        value: string,
    ): State {
        if (hasError) {
            return 'error';
        }

        if (!isFocused && value === '') {
            return 'empty';
        }

        if (isFocused && value === '') {
            return 'empty-focused';
        }

        if (!isFocused) {
            return 'filled';
        }

        return 'filled-focused';
    }

    function getPlaceholderColorsStyle(theme: Theme, state: State) {
        return {
            textColor:
                state === 'empty-focused'
                    ? theme.sw.colors.primary.main
                    : theme.sw.colors.neutral[500],
        };
    }

    function getTextInputStyle(theme: Theme, state: State) {
        let backgroundColor, borderColor, textColor;

        switch (state) {
            case 'filled-focused':
                textColor = theme.sw.colors.neutral[800];
                backgroundColor = theme.sw.colors.neutral[50];
                borderColor = theme.sw.colors.primary.main;
                break;
            case 'empty-focused':
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
            default:
                textColor = theme.sw.colors.neutral[500];
                backgroundColor =
                    theme.sw.colors.neutral[500] + theme.sw.transparency[8];
                break;
        }
        return { backgroundColor, borderColor, textColor };
    }

    function getStyle(theme: Theme, state: State) {
        const { backgroundColor, borderColor, textColor } = getTextInputStyle(
            theme,
            state,
        );

        const placeholderColorsStyle = getPlaceholderColorsStyle(theme, state);

        return StyleSheet.create({
            main: {
                borderRadius: 18,
                height: 48,
                borderWidth: borderColor !== undefined ? 1 : 0,
                borderColor: borderColor,
                width: 72,
                color: textColor,
                fontFamily: 'PublicSans-Bold',
                fontSize: 20,
                lineHeight: 23.5,
                backgroundColor: backgroundColor,
                paddingVertical: 0,
                marginVertical: 0,
            },
            placeholder: {
                color: placeholderColorsStyle.textColor,
            },
        });
    }

    const state = getState(hasError, isFocused, value);

    return { style: getStyle(theme, state), theme };
}

function removeNonNumeric(str: string): string {
    return str.replace(/\D/g, '');
}
